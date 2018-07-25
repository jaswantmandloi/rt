
import {auth, database} from './Firebase';
import {store} from '../Store';
import {routes, baseUrl, prefixUrl} from '../Routes';

let state = store.getState();
let fbDB = database();
let fbAuth = auth();

const FirebaseActions = {
    createUser : (user, errorCb) => {
        store.dispatch({
            type : 'APP_BUSY_STATE_CHANGE',
            payload : {isAppBusy : true}
        });

        fbAuth.createUserWithEmailAndPassword(user.email, user.password).then((fbuser) => {
            FirebaseActions.setUserData(user, fbuser);    
            FirebaseActions.getUserData();        
        })
        .catch((error) => {
                // auth/email-already-in-use  auth/invalid-email  auth/operation-not-allowed   auth/weak-password
                //var errorCode = error.code;
                //var errorMessage = error.message;
                
                store.dispatch({
                    type : 'CHANGE_SIGNUP_STATE',
                    payload : error
                });

                store.dispatch({
                    type : 'APP_BUSY_STATE_CHANGE',
                    payload : {isAppBusy : false}
                });

                errorCb(error);
        });

    },

    login : (user) => {
        store.dispatch({
            type : 'APP_BUSY_STATE_CHANGE',
            payload : {isAppBusy : true}
        });

        let rememberMe = auth.Auth.Persistence.SESSION;
        if(user.rememberMe) {
            rememberMe = auth.Auth.Persistence.LOCAL;
        }

        fbAuth.setPersistence(rememberMe)
        .then(() => {            
            return FirebaseActions.loginAfterCheck(user);
        })
        .catch((error) => {
            store.dispatch({
                type : 'APP_BUSY_STATE_CHANGE',
                payload : {isAppBusy : false}
            });
        });

        
    },

    loginAfterCheck : (user) => {
        fbAuth.signInWithEmailAndPassword(user.email, user.password).then((fbuser) => {
            FirebaseActions.getUserData();            
            state.HistoryReducer.history.replace(routes.dashboard.path);
        })
        .catch((error) => {
            // Handle Errors here. auth/user-disabled  auth/user-not-found  auth/invalid-email  auth/wrong-password
            //var errorCode = error.code;
            //var errorMessage = error.message;                        
            store.dispatch({
                type : 'CHANGE_SIGNIN_STATE',
                payload : error
            });

            store.dispatch({
                type : 'APP_BUSY_STATE_CHANGE',
                payload : {isAppBusy : false}
            });
            
        });
    },

    forgotPassword : (email) => {
        let actionCodeSettings = {
            // The URL to redirect to for sign-in completion. This is also the deep
            // link for mobile redirects. The domain (www.example.com) for this URL
            // must be whitelisted in the Firebase Console.
            url: baseUrl + prefixUrl + routes.signin.path         
        };

        store.dispatch({
            type : 'APP_BUSY_STATE_CHANGE',
            payload : {isAppBusy : true}
        });

        fbAuth.sendPasswordResetEmail(email, actionCodeSettings)
        .then((data) => {
            // Password reset email sent.
            store.dispatch({
                type : 'APP_BUSY_STATE_CHANGE',
                payload : {isAppBusy : false}
            });

            store.dispatch({
                type : 'CHANGE_FORGOTPASS_STATE_SUCCESS',
                payload : {code : 111, message : 'We have sent a link to your email address.'}
            });
        })
        .catch( (error) => {
            // Error occurred. Inspect error.code.
            // Handle Errors here. auth/user-disabled  auth/user-not-found  auth/invalid-email 
            store.dispatch({
                type : 'CHANGE_FORGOTPASS_STATE',
                payload : error
            });

            store.dispatch({
                type : 'APP_BUSY_STATE_CHANGE',
                payload : {isAppBusy : false}
            });
        });
    },

    logout : () => {
        store.dispatch({
            type : 'APP_BUSY_STATE_CHANGE',
            payload : {isAppBusy : true}
        });
        store.dispatch({
            type : 'FIREBASE_USER_STATE_CHANGE',
            payload : {}
        });       
        fbAuth.signOut()
    },

    updatePassword(newPassword) {
        let user = fbAuth.currentUser;

        return user.updatePassword(newPassword);
    },

    isAuthIdExists : () => {
        if(fbAuth.currentUser && fbAuth.currentUser.uid) {
            return true;
        }

        return false;
    },

    getUserData : (unsubsribe = false) => {  

        if(unsubsribe) {
            store.dispatch({
                type : 'APP_BUSY_STATE_CHANGE',
                payload : {isAppBusy : false}
            });            
        }

        if(unsubsribe && FirebaseActions.getUserData.subscription) {
            FirebaseActions.getUserData.subscription.off();
            FirebaseActions.getUserData.isSubsribed = false;

            store.dispatch({
                type : 'APP_BUSY_STATE_CHANGE',
                payload : {isAppBusy : false}
            });

            return;
        }

        if(!FirebaseActions.isAuthIdExists()) {
            return;
        }
        // Subsribe only once 
        if(FirebaseActions.getUserData.isSubsribed) {
            return;
        }     

        FirebaseActions.getUserData.isSubsribed = true;

        let userRef = fbDB.ref('users/' + fbAuth.currentUser.uid);
        userRef.on('value', (snapshot, error) => {
            store.dispatch({
                type : 'FIREBASE_USER_STATE_CHANGE',
                payload : snapshot.val()
            });

            store.dispatch({
                type : 'APP_BUSY_STATE_CHANGE',
                payload : {isAppBusy : false}
            });
        }, (error) => {
            let handleError = error;
        }); 
        
        FirebaseActions.getUserData.subscription = userRef;
    },

    getPlanData : () => {          
        // Subsribe only once 
        if(FirebaseActions.getPlanData.isSubsribed) {
            return;
        }     

        FirebaseActions.getPlanData.isSubsribed = true;

        let plansRef = fbDB.ref('plans');
        plansRef.on('value', (snapshot, error) => {
            let plans = snapshot.val();
            let plansArr = [];

            for(let item of plans) {
                if(!item) {
                    continue;
                }
                plansArr.push(item);
            }

            store.dispatch({
                type : 'FIREBASE_PLANS_CHANGE',
                payload : plansArr
            });            
        }, (error) => {
            let handleError = error;
        }); 
        
        FirebaseActions.getPlanData.subscription = plansRef;
    },

    setUserData : (userData, fbUser) => {
        if(!FirebaseActions.isAuthIdExists()) {
            return;
        }

        delete userData.password;
        delete userData.verifypassword;

        fbDB.ref('users/' + fbAuth.currentUser.uid).set(userData, (error) => {

        }).then((fbUser) => {
            state.HistoryReducer.history.replace(routes.dashboard.path);
        });
    },

    updateUserData : (userData, cbFn = function(){}) => {
        if(!FirebaseActions.isAuthIdExists()) {
            return;
        }
        var userRef = fbDB.ref('users/' + fbAuth.currentUser.uid);
        userRef.update(userData).then(() => {
            cbFn();            
        });
    },

    pushUserObj : (objType, obj) => {
        if(!FirebaseActions.isAuthIdExists()) {
            return;
        }
        var userRef = fbDB.ref('users/' + fbAuth.currentUser.uid);
        userRef.child(objType).push(obj);
    },

    subsribeAuthStateChange : () => {
        // Subsribe only once 
        if(FirebaseActions.subsribeAuthStateChange.isSubsribed) {
            return;
        }     

        FirebaseActions.subsribeAuthStateChange.isSubsribed = true;

        fbAuth.onAuthStateChanged((fbUser) => {
            if (fbUser) {       
                FirebaseActions.getUserData();                
            }  else {
                FirebaseActions.getUserData(true);  
                       
            }   
            
            store.dispatch({
                type : 'FIREBASE_AUTH_STATE_CHANGE',
                payload : fbUser
            });
            

            store.dispatch({
                type : 'APP_READY_STATE_CHANGE',
                payload : {isAppReady : true}
            });

        });
    }
};


FirebaseActions.subsribeAuthStateChange();



export default FirebaseActions;
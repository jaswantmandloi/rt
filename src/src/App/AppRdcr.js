import {registerReducer} from '../Core/AsyncReducers';

const AppRdcr = (state = 
  {isAppBusy : true, isAppReady : false, topUpPopUp : false,
    userInfo : {}, selectedPlanInfo : {}, topUpInfo : {topupGrandTotal : 0}}, action) => {
  switch (action.type) {
    case 'INIT':
      return {};

    case 'APP_BUSY_STATE_CHANGE':
      state.isAppBusy = action.payload.isAppBusy;
      return state
    case 'APP_READY_STATE_CHANGE':
      state.isAppReady = action.payload.isAppReady;
      return state

    case 'APP_USER_INFO_CHANGE':
      state.userInfo = action.payload;
      return state

    case 'USER_PLAN_CHANGE':
      state.selectedPlanInfo = action.payload;
      return state
    case 'USER_TOPUP_CHANGE':
      state.topUpInfo = action.payload;
      return state
    case 'USER_TOPUP_POPUP_CHANGE':
      state.topUpPopUp = action.payload;
      return state
    
    default:
      return state
  }
}

registerReducer({AppRdcr : AppRdcr});


import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import './index.css';
import AppCntnr from './App/AppCntnr';
import { store, history} from './Shared/Store';
import registerServiceWorker from './registerServiceWorker';


function indexInit() {
    return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <AppCntnr />
          </ConnectedRouter>
        </Provider>
      
      )
}

ReactDOM.render(indexInit(), document.getElementById('root'));
registerServiceWorker();

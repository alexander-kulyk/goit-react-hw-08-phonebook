import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ProviderCtx } from 'context/Provider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider  store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename='goit-react-hw-08-phonebook'>
          <ProviderCtx>
            <App />
          </ProviderCtx>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

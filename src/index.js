import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App/app';
import './styles/style.css';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer/reducer';
import { PersistGate } from 'redux-persist/integration/react';

window.React = React;

const persistConfig = {
  key: 'root',
  storage,
};

const persistedStore = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const persistor = persistStore(store);

const element = document.getElementById('root');
const root = createRoot(element);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import "./assets/scss/index.scss";
import { fetchUser } from './store/features/userAuth/authSlice';
import { PersistGate } from 'redux-persist/integration/react';

store.dispatch(fetchUser());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
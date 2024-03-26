import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { persistor, store } from './redux/contacts/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RouterProvider } from 'react-router-dom';
import { contactsRouter } from './contactsRouter';
console.log(store);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <RouterProvider router={contactsRouter}>
          <App />
          </RouterProvider>
      </Provider>
      </PersistGate>
  </React.StrictMode>
);

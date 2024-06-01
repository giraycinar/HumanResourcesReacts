import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';


import RootNavigation from './RootNavigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <Provider store={store}>

          <RootNavigation />
    
      </Provider>
  </React.StrictMode>
);

reportWebVitals();

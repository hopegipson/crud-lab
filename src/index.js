import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurants from './reducers/manageRestaurant'
import counter from './counter'

import { Provider } from 'react-redux';
import { createStore } from 'redux';



const store = createStore(manageRestaurants, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);

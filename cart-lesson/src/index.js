import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import appReducers from './reducers/index';

const store = createStore(appReducers);


ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    
    , document.getElementById('root'));
registerServiceWorker();

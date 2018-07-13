import React from 'react';
import ReactDOM from 'react-dom';

import './app/style.css';

import App from './app/App'

function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash')
    .catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
    document.body.appendChild(component);
})
ReactDOM.render(<App />, document.getElementById('app'));
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App.jsx'
var container = document.getElementById('root');
ReactDOM.hydrate( < App / > , container); 
if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        const NextApp = require('./App.jsx').default
        ReactDOM.hydrate(<NextApp/>, container);
    })
}
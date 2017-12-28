import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './api/registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './containers/scss/overrideBootstrap.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

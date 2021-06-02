import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// specifies a DOM node and takes control of it to render its own shadow DOM whose root is defined in the first parameter
ReactDOM.render(<App/>, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/common/public.css';
import RouterComponent from './router';
import * as serviceWorker from './serviceWorker';

function App() {
  return(
    <React.Fragment>

    </React.Fragment>
  )
}
ReactDOM.render(
  <RouterComponent />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();

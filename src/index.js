// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import dva from 'dva';
import { createBrowserHistory as createHistory } from 'history';
import './index.css'
import "antd/dist/antd.css";
import translation from './models/translation';

const app = dva({ history: createHistory( ) });

app.model(translation)
app.router(require('./router').default);
app.start('#root');

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

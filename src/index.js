import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import TodoApp from './components/TodoApp';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<TodoApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

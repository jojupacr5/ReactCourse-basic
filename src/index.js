/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 */

/*  const element = document.createElement('h1');
 element.innerText = "Hello Platzi Badges00";

 const container = document.getElementById('root');

 container.appendChild(element);
  */
/* 
const content = React.createElement('div', {}, 
  React.createElement('h1', {}, 'Esto es un titulo'),
  React.createElement('p', {}, 'Esto es un parrafo')
)
const element = React.createElement('a', {href: 'https://Platzi.com'}, 'Hola soy el enlace'); */

import React from 'react';
import ReactDDM from 'react-dom';

//utilities
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

import App from './components/App'

const container = document.getElementById('root');

ReactDDM.render(
  <App />, container);
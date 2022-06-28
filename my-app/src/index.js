import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  {store} from './state/Store'
import {addTodo, removeTodo, changeTodo, resetTodos } from './state/TodoState'


store.subscribe(() => {
  console.log(store.getState)
})

store.dispatch(addTodo({
  id: 01,
  title: 'esercizio 01',
  completed: true,
}))
store.dispatch(addTodo({
  id: 02,
  title: 'esercizio 02',
  completed: true,
}))
store.dispatch(addTodo({
  id: 03,
  title: 'esercizio 03',
  completed: true,
}))



store.dispatch(removeTodo(1))
store.dispatch(removeTodo(3))



store.dispatch(changeTodo(1,{
  title: 'fallo meglio',
  completed: false
  }))


store.dispatch(changeTodo(2,{
  title: 'non va ancora bene',
  completed: false
}))


store.dispatch(resetTodos())


/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/

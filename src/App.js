import React, { useState } from 'react';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const onNewTodo = (value) => {
    setTodos([
      // operador de concatenação, pega os valores anteriores e adiciona o novo
      ...todos,
      {
        id: new Date().getTime(),
        title: value,
        checked: false,
      }
    ])
  }

  const onToogle = (todo) => {
    setTodos(
      todos.map(object =>
        object.id === todo.id ? { ...object, checked: !todo.checked } : object
      ));
  }

  const onRemove = (todo) => {
    setTodos(todos.filter(object => object.id !== todo.id));
  }

  return (
    <section id='app' className='container'>
      <header>
        <h1 className='title'>To Do</h1>
      </header>

      <section className='main'>
        <NewTodo onNewTodo={onNewTodo} />

        <TodoList todos={todos} onToogle={onToogle} onRemove={onRemove}/>
      </section>
    </section>
  );
}

export default App;

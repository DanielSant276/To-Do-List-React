import React, { useState } from 'react';
import './styles.css';

const NewTodo = ({ onNewTodo }) => {
  const [value, setValue] = useState('');

  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const erase = () => {
    setValue('');
  }

  const submit = () => {
    if (onNewTodo) {
      onNewTodo(value);
      erase();
    }
  }

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    }
    else if (event.which === ESCAPE_KEY) {
      erase();
    }
  }

  return (
    <input
      className='new-todo'
      placeholder='O que precisa ser feito?'
      value={value}
      onChange={event => setValue(event.target.value)}
      onKeyDown={onKeyDown}
    />
  );
}

export default NewTodo;
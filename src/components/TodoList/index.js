import React from 'react';
import { MdDelete } from 'react-icons/md';
import './styles.css';

const TodoList = ({ todos, onToogle, onRemove }) => {
  return (
    <ul className='todo-list'>
      {
        todos.map(todo => (
          <li key={todo.id.toString()}>
            <span className={todo.checked ? 'todo checked' : 'todo'} onClick={() => onToogle(todo)} onKeyPress={() => onToogle(todo)} role='button'>{todo.title}</span>
            <button type='button' className='remove' onClick={() => onRemove(todo)}>
              <MdDelete size={28} />
            </button>
          </li>
        ))
      }
    </ul>
  );
}

export default TodoList;
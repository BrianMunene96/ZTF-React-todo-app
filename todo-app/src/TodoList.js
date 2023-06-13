import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodos = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  };

  const deleteTodos = (selectedTodo) => {
    const deleted = todos.filter((todo) => todo !== selectedTodo);
    setTodos(deleted);
  };

  return (
    <div className="todo__container">
      <div className="todo__form">
        <form action="">
          <input
            className="todo__form__input"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            type="submit"
            className="todo__form__button"
            onClick={addTodos}
          >
            Add Todo
          </button>
        </form>
      </div>

      <ul className="todo__lists">
        {todos.length ? (
          todos.map((todo) => {
            return (
              <li className="todo__list">
                {todo}{' '}
                <i
                  class="fa-solid fa-circle-check"
                  onClick={() => deleteTodos(todo)}
                ></i>
              </li>
            );
          })
        ) : (
          <h3>You have no todos 😊 Please add a task</h3>
        )}
      </ul>
    </div>
  );
};

export default TodoList;

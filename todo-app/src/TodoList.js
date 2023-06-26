import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodos = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: input, completed: false }]);
    setInput('');
  };

  const deleteTodos = (selectedTodo) => {
    const deleted = todos.filter((todo) => todo !== selectedTodo);
    setTodos(deleted);
  };

  const handleClick = (event) => {
    if (
      event.currentTarget.style.color &&
      event.target.parentNode.style.color
    ) {
      event.currentTarget.style.color = null;
      event.target.parentNode.style.color = null;
    } else {
      event.currentTarget.style.color = 'rgb(29, 225, 29)';
      event.target.parentNode.style.color = 'rgb(29, 225, 29)';
    }
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

      <div className="todo__lists">
        {todos.length ? (
          todos.map((todo) => {
            return (
              <div className="todo__list">
                <p>
                  {todo.text.toUpperCase()}{' '}
                  <i class="fa-solid fa-circle-check" onClick={handleClick}></i>
                </p>
                <div className="todo__buttons">
                  <button onClick={() => deleteTodos(todo)}>Delete</button>
                </div>
              </div>
            );
          })
        ) : (
          <h3 className="alternative__text">
            You have no todos 😊 Please add a task
          </h3>
        )}
      </div>

      {/* <ul className="todo__lists">
        {todos.length ? (
          todos.map((todo) => {
            return (
              <li
                className={
                  isComplete ? 'todo__list completed__list' : 'todo__list'
                }
              >
                {todo.text}{' '}
                <i
                  class="fa-solid fa-circle-check"
                  // onClick={() => deleteTodos(todo)}
                  onClick={handleClick}
                ></i>
              </li>
            );
          })
        ) : (
          <h3 className="alternative__text">
            You have no todos 😊 Please add a task
          </h3>
        )}
      </ul> */}
    </div>
  );
};

export default TodoList;

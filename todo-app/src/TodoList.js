import React from 'react';
import './TodoList.css';

const TodoList = () => {
  return (
    <div className="todo__container">
      <div className="todo__form">
        <form action="">
          <input className="todo__form__input" type="text" />
          <button className="todo__form__button">Add Todo</button>
        </form>
      </div>
      <ul className="todo__lists">
        <li className="todo__list">Buy Milk</li>
        <i class="gg-close-r"></i>
        <li className="todo__list">
          Take the trash out <i class="gg-close-r"></i>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;

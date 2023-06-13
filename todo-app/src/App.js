import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="header__title">Todo app</h1>
        <div className="header__caption">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet et
            voluptates maxime aspernatur architecto, repellat earum voluptatibus
            pariatur id, repellendus ratione omnis dolorum error sequi
            consequatur porro culpa quod quis. hey
          </p>
        </div>
      </header>
      <div className="app__todos">
        <TodoList />
      </div>
    </div>
  );
}

export default App;

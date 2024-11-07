import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import { TaskList } from './components/TaskList';

function App() {
  const [items, setItems] = useState([]);

  const clickHandler = () => {
    let inputValue = document.querySelector(".add-task-input");

    if (inputValue.value === '') {
      console.warn("input something man");
    } else {
      const newItem = { id: inputValue.value };

      // Update the state with the new item
      setItems([...items, newItem]);
      inputValue.value = ''; // Clear the input field
    }
  };

  return (
    <>
      <div className="todo-app">
        <h1>To-Do List</h1>
        <form className="add-task-form">
          <input className="add-task-input" type="text" />
          <AddTask callbackfn={clickHandler} />
        </form>
        <ul className="task-list">
          {items.map((item, index) => (
            <TaskList key={index} inputData={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

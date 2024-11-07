import { useState, useRef } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import { TaskList } from './components/TaskList';

function App() {
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);

  const clickHandler = () => {
    if (inputRef.current.value === '') {
      console.warn("Input something, please.");
    } else {
      const newItem = { id: inputRef.current.value };

      setItems([...items, newItem]);
      inputRef.current.value = '';
    }
  };
  const deleteItem = (event) => {

    const index = parseInt(event.target.id, 10); 

    const newItems = [...items]; 

    newItems.splice(index, 1); 

    setItems(newItems);

  }

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <form className="add-task-form">
        <input ref={inputRef} className="add-task-input" type="text" />
        <AddTask callbackfn={clickHandler} />
      </form>
      <ul className="task-list">
        {items.map((item, index) => (
          <TaskList key={index} inputData={item.id} identification={index} clFunc={deleteItem} />
        ))}
      </ul>
    </div>
  );
}

export default App;

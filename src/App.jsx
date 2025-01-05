import ToDoList from "./components/ToDoList";
import CreateToDo from "./components/CreateToDo";
import { useState, useEffect } from "react";
const App = () => {
  const [list, setList] = useState([]);
  useEffect(() => console.log(list), [list]);

  const handleAddItem = (item) => {
    setList([...list, item]);
  };

  const handleComplete = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  };

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>App</h1>
      <CreateToDo onAddItem={handleAddItem} />
      <ToDoList
        list={list}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;

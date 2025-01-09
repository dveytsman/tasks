import ToDoList from "./components/ToDoList";
import CreateToDo from "./components/CreateToDo";
import { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  const [list, setList] = useState({});
  useEffect(() => console.log(list), [list]);

  const handleAddItem = (item, id) => {
    setList((prevList) => {
      return { ...prevList, [id]: item };
    });
  };

  const handleComplete = (id) => {
    const newItem = {
      id: id,
      task: list[id].task,
      completed: !list[id].completed,
    };
    setList((prevList) => ({
      ...prevList,
      [id]: newItem,
    }));
  };

  const handleDelete = (id) => {
    setList((prevList) => {
      const { [id]: _, ...rest } = prevList;
      return rest;
    });
  };

  const handleEdit = (task) => {
    setList((prevList) => {
      return { ...prevList, [task.id]: task };
    });
  };

  return (
    <div className="app-container">
      <h1>App</h1>
      <CreateToDo onAddItem={handleAddItem} />
      <ToDoList
        list={list}
        onComplete={handleComplete}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default App;

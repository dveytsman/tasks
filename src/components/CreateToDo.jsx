import { useState, useRef } from "react";

const CreateToDo = ({ onAddItem }) => {
  // const [task, setTask] = useState("");
  const inputRef = useRef(null);

  const handleChangeTask = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef);
    // if (task.trim() !== "") {
    const newTask = {
      id: Date.now(),
      task: inputRef.current.value,
      completed: false,
    };
    onAddItem(newTask, newTask.id);

    console.log(newTask);
    // setTask("");
    inputRef.current.value = "";
  };
  // };

  // TODO: controlled to uncontrolled
  // TODO: CHANGE array to object for faster lookup.

  return (
    <div>
      <h1>New Task</h1>
      <form>
        <input
          type="text"
          ref={inputRef}
          // value={task}
          // onChange={handleChangeTask}
          placeholder="Enter New Task"
        />
        <button onClick={handleSubmit} type="submit">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateToDo;

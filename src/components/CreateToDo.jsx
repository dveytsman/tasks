import { useState } from "react";

const CreateToDo = ({ onAddItem }) => {
  const [task, setTask] = useState("");

  const handleChangeTask = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() !== "") {
      const newTask = {
        id: Date.now(),
        task: task,
        completed: false,
      };
      onAddItem(newTask);

      console.log(newTask);
      setTask("");
    }
  };

  return (
    <div>
      <h1>New Task</h1>
      <form>
        <input
          type="text"
          value={task}
          onChange={handleChangeTask}
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

import { useState } from "react";
const ToDoEdit = ({ task, onEdit }) => {
  const [title, setTitle] = useState(task.title);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleEdit = (e) => {
    e.preventDefault();
    const updatedTask = {
      id: task.id,
      task: title,
      completed: task.completed,
    };
    onEdit(updatedTask);
    setTitle("");
  };
  return (
    <form onSubmit={handleTitleEdit}>
      <input type="text" value={title} onChange={handleTitleChange} />
    </form>
  );
};
export default ToDoEdit;

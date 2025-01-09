import { useState, useRef } from "react";
const ToDoEdit = ({ task, onEdit }) => {
  const [title, setTitle] = useState("");
  const editRef = useRef(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleEdit = (e) => {
    e.preventDefault();
    const updatedTask = {
      id: task.id,
      task: editRef.current.value,
      completed: task.completed,
    };
    onEdit(updatedTask);
    // setTitle("");
    editRef.current.value = "";
  };
  return (
    <form onSubmit={handleTitleEdit}>
      <input type="text" ref={editRef} />
    </form>
  );
};
export default ToDoEdit;

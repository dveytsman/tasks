import ToDoEdit from "./ToDoEdit";
const ToDoItem = ({ item, onComplete, onDelete }) => {
  const toggleComplete = () => {
    onComplete(item.id);
    console.log(item.id);
  };
  const deleteItem = () => {
    onDelete(item.id);
  };
  return (
    <div className="item-container">
      <p>{item.task}</p>
      <input
        onChange={toggleComplete}
        type="checkbox"
        checked={item.completed}
      />
      <button onClick={deleteItem}>X</button>
      <ToDoEdit task={item} />
    </div>
  );
};

export default ToDoItem;

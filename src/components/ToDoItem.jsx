import ToDoEdit from "./ToDoEdit";
const ToDoItem = ({ item, onComplete }) => {
  const toggleComplete = () => {
    onComplete(item.id);
    console.log(item.id);
  };
  return (
    <div className="item-container">
      <p>{item.task}</p>
      <input
        onChange={toggleComplete}
        type="checkbox"
        checked={item.completed}
      />
      <ToDoEdit />
    </div>
  );
};

export default ToDoItem;

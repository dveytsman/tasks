import ToDoItem from "./ToDoItem";

const ToDoList = ({ list, onComplete, onDelete, onEdit }) => {
  const renderedList = list.map((item) => {
    return (
      <ToDoItem
        key={item.id}
        item={item}
        onComplete={onComplete}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );
  });
  return (
    <div className="list-container">
      <h1>To do list</h1>
      <div className="list">{renderedList}</div>
    </div>
  );
};

export default ToDoList;

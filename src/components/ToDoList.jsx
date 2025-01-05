import ToDoItem from "./ToDoItem";

const ToDoList = ({ list, onComplete, onDelete }) => {
  const renderedList = list.map((item) => {
    return (
      <ToDoItem
        key={item.id}
        item={item}
        onComplete={onComplete}
        onDelete={onDelete}
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

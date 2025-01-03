import ToDoItem from "./ToDoItem";

const ToDoList = ({ list, onComplete }) => {
  const renderedList = list.map((item) => {
    return <ToDoItem key={item.id} item={item} onComplete={onComplete} />;
  });
  return (
    <div className="list-container">
      <h1>To do list</h1>
      <div className="list">{renderedList}</div>
    </div>
  );
};

export default ToDoList;

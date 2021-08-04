export default function TodoItem({ todo, onEditClick, onDeleteClick }) {
  return (
    <div key={todo.id}>
      <p> {todo.text}</p>
      <button className="btn btn-info" onClick={() => onEditClick(todo)}>Edit</button>
      <button className="btn btn-danger" onClick={() => onDeleteClick(todo.id)}>Delete</button>
    </div>
  );
}

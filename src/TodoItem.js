export default function TodoItem({ todo, onEditClick, onDeleteClick }) {
  return (
    <div key={todo.id}>
      <p> {todo.text}</p>
      <button onClick={() => onEditClick(todo)}>Edit</button>
      <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
    </div>
  );
}

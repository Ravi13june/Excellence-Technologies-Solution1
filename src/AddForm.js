
export default function AddTodoForm({
  todo,
  onAddFormSubmit,
  onAddInputChange,
}) {
  return (
    <form>
      <h2>Add Todo</h2>
      <label htmlFor="todo">Create todo: </label>
      <input
        className="input"
        name="todo"
        type="text"
        placeholder="Add new todo"
        value={todo}
        onChange={onAddInputChange}
        
      />
      <button className="btn btn-success" onClick={onAddFormSubmit}>Add</button>
    </form>
  );
}

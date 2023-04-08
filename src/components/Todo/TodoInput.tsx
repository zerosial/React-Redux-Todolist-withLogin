const TodoInput = ({ onAddTodo }: any) => {
  return (
    <form onSubmit={onAddTodo}>
      <input data-testid="new-todo-input" />
      <button data-testid="new-todo-add-button">추가</button>
    </form>
  );
};

export default TodoInput;

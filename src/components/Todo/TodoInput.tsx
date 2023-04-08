import { createTodo } from "components/Api/Todo";

const TodoInput = () => {
  const formHandler = async (e: any) => {
    e.preventDefault();
    const todo = (e.currentTarget.elements[0] as HTMLInputElement).value;
    await createTodo({ todo });
  };
  return (
    <form onSubmit={formHandler}>
      <input data-testid="new-todo-input" />
      <button data-testid="new-todo-add-button">추가</button>
    </form>
  );
};

export default TodoInput;

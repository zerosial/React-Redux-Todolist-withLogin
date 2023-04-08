import { deleteTodo, updateTodo } from "components/Api/Todo";
import { useState } from "react";

const TodoItem = ({ id, title, isCompleted, onUpdate }: any) => {
  const [isChecked, setIsChecked] = useState(isCompleted);
  const deleteHandler = async () => {
    await deleteTodo({ id });
  };

  const checkboxHandler = async () => {
    await updateTodo({ id, todo: title, isCompleted: !isChecked });
    setIsChecked(!isChecked);
  };

  return (
    <li>
      <label>
        <input type="checkbox" checked={isChecked} onChange={checkboxHandler} />
        <span>{title}</span>
      </label>
      <button data-testid="modify-button" onClick={() => onUpdate(true)}>
        수정
      </button>
      <button data-testid="delete-button" onClick={deleteHandler}>
        삭제
      </button>
    </li>
  );
};

export default TodoItem;

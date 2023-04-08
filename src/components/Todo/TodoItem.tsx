import { updateTodo } from "components/Api/Todo";
import { useState } from "react";

const TodoItem = ({ id, title, isCompleted, onModify, onDelete }: any) => {
  const [isChecked, setIsChecked] = useState(isCompleted);

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
      <button data-testid="modify-button" onClick={onModify}>
        수정
      </button>
      <button data-testid="delete-button" onClick={onDelete}>
        삭제
      </button>
    </li>
  );
};

export default TodoItem;

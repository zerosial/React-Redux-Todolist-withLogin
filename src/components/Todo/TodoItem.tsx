import { deleteTodo } from "components/Api/Todo";
import { useState } from "react";

const TodoItem = ({ id, title, isCompleted }: any) => {
  const [isChecked, setIsChecked] = useState(isCompleted);
  const deleteHandler = async () => {
    await deleteTodo({ id });
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <span>{title}</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button" onClick={deleteHandler}>
        삭제
      </button>
    </li>
  );
};

export default TodoItem;

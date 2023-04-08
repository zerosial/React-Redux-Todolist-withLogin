import { updateTodo } from "components/Api/Todo";
import { useState } from "react";

const TodoUpdateItem = ({ id, title, isCompleted, onUpdate }: any) => {
  const [isChecked, setIsChecked] = useState(isCompleted);
  const [inputValue, setInputValue] = useState(title);
  const checkboxHandler = async () => {
    await updateTodo({ id, todo: title, isCompleted: !isChecked });
    setIsChecked(!isChecked);
  };

  const submitHandler = async () => {
    await updateTodo({ id, todo: inputValue, isCompleted });
    onUpdate(false);
  };

  const cancelHandler = () => {
    onUpdate(false);
  };

  return (
    <li>
      <label>
        <input type="checkbox" checked={isChecked} onChange={checkboxHandler} />
        <input
          data-testid="modify-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <button data-testid="submit-button" onClick={submitHandler}>
        제출
      </button>
      <button data-testid="cancel-button" onClick={cancelHandler}>
        취소
      </button>
    </li>
  );
};

export default TodoUpdateItem;

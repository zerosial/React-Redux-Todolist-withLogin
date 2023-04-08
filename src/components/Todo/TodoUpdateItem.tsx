import { updateTodo } from "components/Api/Todo";
import { useState } from "react";

const TodoUpdateItem = ({
  id,
  title,
  isCompleted,
  onCancelModify,
  onSubmitModify,
}: any) => {
  const [isChecked, setIsChecked] = useState(isCompleted);
  const [inputValue, setInputValue] = useState(title);

  const checkboxHandler = async () => {
    await updateTodo({ id, todo: title, isCompleted: !isChecked });
    setIsChecked(!isChecked);
  };

  const inputHandler = (e: any) => {
    setInputValue(e.target.value);
  };

  const enterHandler = (e: any) => {
    if (e.key === "Enter") {
      onSubmitModify(inputValue);
    }
  };

  return (
    <li>
      <label>
        <input type="checkbox" checked={isChecked} onChange={checkboxHandler} />
        <input
          data-testid="modify-input"
          value={inputValue}
          onChange={inputHandler}
          onKeyDown={enterHandler}
        />
      </label>
      <button
        data-testid="submit-button"
        onClick={() => onSubmitModify(inputValue)}
      >
        제출
      </button>
      <button data-testid="cancel-button" onClick={onCancelModify}>
        취소
      </button>
    </li>
  );
};

export default TodoUpdateItem;

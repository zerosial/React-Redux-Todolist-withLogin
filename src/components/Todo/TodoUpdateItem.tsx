import { Button, Divider } from "@chakra-ui/react";
import { updateTodo } from "components/Api/Todo";
import { useState } from "react";
import { TodoUpdateItemProps } from "types/Todo";

const TodoUpdateItem = ({
  id,
  title,
  isCompleted,
  onCancelModify,
  onSubmitModify,
}: TodoUpdateItemProps) => {
  const [isChecked, setIsChecked] = useState(isCompleted);
  const [inputValue, setInputValue] = useState(title);

  const checkboxHandler = async () => {
    await updateTodo({ id, todo: title, isCompleted: !isChecked });
    setIsChecked(!isChecked);
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const enterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
      <Button
        ml={8}
        colorScheme="blue"
        data-testid="submit-button"
        onClick={() => onSubmitModify(inputValue)}
      >
        제출
      </Button>
      <Button
        ml={8}
        colorScheme="red"
        data-testid="cancel-button"
        onClick={onCancelModify}
      >
        취소
      </Button>
      <Divider mt={2} mb={2} />
    </li>
  );
};

export default TodoUpdateItem;

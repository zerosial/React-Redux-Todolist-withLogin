import { Button, Divider } from "@chakra-ui/react";
import { updateTodo } from "components/Api/Todo";
import { useState } from "react";
import { TodoItemProps } from "types/Todo";

const TodoItem = ({
  id,
  title,
  isCompleted,
  onModify,
  onDelete,
}: TodoItemProps) => {
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
      <Button
        ml={8}
        colorScheme="blue"
        data-testid="modify-button"
        onClick={onModify}
      >
        수정
      </Button>
      <Button
        ml={8}
        colorScheme="red"
        data-testid="delete-button"
        onClick={onDelete}
      >
        삭제
      </Button>
      <Divider mt={2} mb={2} />
    </li>
  );
};

export default TodoItem;

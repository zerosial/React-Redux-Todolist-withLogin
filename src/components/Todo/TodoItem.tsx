import { updateTodo } from "components/Api/Todo";
import { useState } from "react";

interface TodoItemProps {
  id: string;
  title: string;
  isCompleted: boolean;
  onModify: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDelete: (e: React.FormEvent<HTMLButtonElement>) => void;
}

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

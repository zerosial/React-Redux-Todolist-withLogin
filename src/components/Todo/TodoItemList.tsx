import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoUpdateItem from "./TodoUpdateItem";
import { deleteTodo, updateTodo } from "components/Api/Todo";

interface TodoItemListProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

const TodoItemList = ({ id, title, isCompleted }: TodoItemListProps) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [todoTitle, setTodoTitle] = useState(title);

  if (isDeleted) {
    return null;
  }

  const modifyHandler = () => {
    setIsUpdated(true);
  };

  const deleteHandler = async () => {
    await deleteTodo({ id });
    setIsDeleted(true);
  };

  const cancelModifyHandler = () => {
    setIsUpdated(false);
  };

  const submitModifyHandler = async (inputValue: string) => {
    await updateTodo({ id, todo: inputValue, isCompleted });
    setTodoTitle(inputValue);
    setIsUpdated(false);
  };

  return isUpdated ? (
    <TodoUpdateItem
      id={id}
      title={todoTitle}
      isCompleted={isCompleted}
      onCancelModify={cancelModifyHandler}
      onSubmitModify={submitModifyHandler}
    />
  ) : (
    <TodoItem
      id={id}
      title={todoTitle}
      isCompleted={isCompleted}
      onModify={modifyHandler}
      onDelete={deleteHandler}
    />
  );
};

export default TodoItemList;

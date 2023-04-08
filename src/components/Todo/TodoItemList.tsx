import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoUpdateItem from "./TodoUpdateItem";

const TodoItemList = ({ id, title, isCompleted }: any) => {
  const [isUpdate, setIsUpdate] = useState(false);

  return isUpdate ? (
    <TodoUpdateItem
      id={id}
      title={title}
      isCompleted={isCompleted}
      onUpdate={setIsUpdate}
    />
  ) : (
    <TodoItem
      id={id}
      title={title}
      isCompleted={isCompleted}
      onUpdate={setIsUpdate}
    />
  );
};

export default TodoItemList;

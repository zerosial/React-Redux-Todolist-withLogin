import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import { createTodo, getTodos } from "components/Api/Todo";
import TodoItemList from "./TodoItemList";
import { DUMMY_DATA } from "utils/constants";

const TodoLists = () => {
  const [todoData, setTodoData] = useState(DUMMY_DATA);

  useEffect(() => {
    const getData = async () => {
      const data = await getTodos();
      setTodoData(data);
    };
    getData();
  }, []);

  const onAddTodoHandler = async (e: any) => {
    e.preventDefault();
    const todo = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const data = await createTodo({ todo });
    setTodoData([...todoData, data]);
    e.target[0].value = null;
  };

  return (
    <>
      <TodoInput onAddTodo={onAddTodoHandler} />
      {todoData.map((item) => (
        <TodoItemList
          key={item.id}
          id={String(item.id)}
          title={item.todo}
          isCompleted={item.isCompleted}
        />
      ))}
    </>
  );
};

export default TodoLists;

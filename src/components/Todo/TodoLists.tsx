import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import { createTodo, getTodos } from "components/Api/Todo";
import { setToken } from "components/Api";
import TodoItemList from "./TodoItemList";

const DUMMY_DATA = [
  {
    id: 1,
    todo: "todo 1번쨰",
    isCompleted: false,
    userId: 1,
  },
  {
    id: 2,
    todo: "todo 2번쨰",
    isCompleted: true,
    userId: 1,
  },
  {
    id: 3,
    todo: "todo 3번쨰",
    isCompleted: false,
    userId: 1,
  },
  {
    id: 4,
    todo: "todo 4번쨰",
    isCompleted: false,
    userId: 1,
  },
];

const TodoLists = () => {
  const [todoData, setTodoData] = useState(DUMMY_DATA);

  useEffect(() => {
    const token = window.localStorage.getItem("access_token");
    setToken(String(token));
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
          id={item.id}
          title={item.todo}
          isCompleted={item.isCompleted}
        />
      ))}
    </>
  );
};

export default TodoLists;

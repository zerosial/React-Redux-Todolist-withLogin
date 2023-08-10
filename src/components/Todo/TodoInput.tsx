import { Flex, Input } from "@chakra-ui/react";
import { TodoInputProps } from "types/Todo";

const TodoInput = ({ onAddTodo }: TodoInputProps) => {
  return (
    <form onSubmit={onAddTodo}>
      <Flex gap={4} mb={8}>
        <Input data-testid="new-todo-input" w={80} />
        <button data-testid="new-todo-add-button">추가</button>
      </Flex>
    </form>
  );
};

export default TodoInput;

import { Button, Flex, Input } from "@chakra-ui/react";

interface TodoInputProps {
  onAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
}

const TodoInput = ({ onAddTodo }: TodoInputProps) => {
  return (
    <form onSubmit={onAddTodo}>
      <Flex gap={4}>
        <Input data-testid="new-todo-input" w={80} />
        <Button data-testid="new-todo-add-button">추가</Button>
      </Flex>
    </form>
  );
};

export default TodoInput;

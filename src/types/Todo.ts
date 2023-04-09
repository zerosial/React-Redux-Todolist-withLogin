export interface TodoInputProps {
  onAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface TodoItemListProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface TodoUpdateItemProps extends TodoItemListProps {
  onCancelModify: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onSubmitModify: (inputValue: string) => void;
}

export interface TodoItemProps extends TodoItemListProps {
  onModify: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDelete: (event: React.FormEvent<HTMLButtonElement>) => void;
}

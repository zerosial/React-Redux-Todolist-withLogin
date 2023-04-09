export interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SignFormProps {
  title: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

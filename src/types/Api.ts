export interface SignParams {
  email: string;
  password: string;
}

export interface TodoParams {
  todo?: string;
  id?: string;
  isCompleted?: boolean;
}

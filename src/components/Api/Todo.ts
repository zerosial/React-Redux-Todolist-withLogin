import { publicApi } from ".";

interface TodoParams {
  todo?: string;
  id?: string;
  isCompleted?: boolean;
}

export async function createTodo({ todo }: TodoParams) {
  try {
    const response = await publicApi.post(`/todos`, {
      todo,
    });
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function getTodos() {
  try {
    const response = await publicApi.get(`/todos`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function updateTodo({ id, todo, isCompleted }: TodoParams) {
  try {
    const response = await publicApi.put(`/todos/${id}`, {
      todo,
      isCompleted,
    });
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function deleteTodo({ id }: TodoParams) {
  try {
    const response = await publicApi.delete(`/todos/${id}`);
    if (response.status === 204) {
      return true;
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

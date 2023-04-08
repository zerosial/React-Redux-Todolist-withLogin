import { publicApi } from ".";

export async function createTodo({ todo }: any) {
  try {
    const response = await publicApi.post(`/todos`, {
      todo,
    });
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function getTodos() {
  try {
    const response = await publicApi.get(`/todos`);
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function updateTodo({ id, todo, isCompleted }: any) {
  try {
    const response = await publicApi.put(`/todos/${id}`, {
      todo,
      isCompleted,
    });
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function deleteTodo({ id }: any) {
  try {
    const response = await publicApi.delete(`/todos/${id}`);
    if (response.status === 204) {
      return true;
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

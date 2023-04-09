import { SignParams } from "types/Api";
import { publicApi, setToken } from ".";

export async function postSignUp({ email, password }: SignParams) {
  try {
    const response = await publicApi.post(`/auth/signup`, {
      email,
      password,
    });
    if (response.status === 201) {
      return true;
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function postSignIn({ email, password }: SignParams) {
  try {
    const response = await publicApi.post(`/auth/signin`, {
      email,
      password,
    });
    if (response.status === 200) {
      setToken(response.data.access_token);
      return true;
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

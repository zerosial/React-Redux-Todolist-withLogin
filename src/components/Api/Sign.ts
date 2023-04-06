import { publicApi, setToken } from ".";

export async function postSignUp({ email, password }: any) {
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

export async function postSignIn({ email, password }: any) {
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

/*

export async function postMarketList({ cursor, category }: PostMarketList) {
  try {
    const response = await internalApi.post(`/api/enrollments`, {
      cursor,
      category,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
  throw new Error(API_ERROR_MESSAGES.FAIL_POST_MARKET_LIST);
}

export async function patchMarketStatus({
  status,
  enrollmentId,
}: PatchMarketStatus) {
  try {
    const token =
      typeof window !== 'undefined' ? (getAccessToken() as string) : '';
    const response = await internalApi.patch(`/api/marketstatus`, {
      token,
      status,
      enrollmentId,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
  throw new Error(API_ERROR_MESSAGES.FAIL_PATCH_MARKET_STATUS);
}
 */

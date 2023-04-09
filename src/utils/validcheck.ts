export const isEmailValid = (value: string) => {
  if (value.includes("@")) {
    return true;
  }
  return false;
};

export const isPasswordValid = (value: string) => {
  if (value.length >= 8) {
    return true;
  }
  return false;
};

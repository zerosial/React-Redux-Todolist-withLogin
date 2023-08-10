import { Input, FormLabel, FormHelperText } from "@chakra-ui/react";
import { InputProps } from "types/Sign";

const PasswordInput = ({ onChange }: InputProps) => {
  return (
    <>
      <FormLabel>Password</FormLabel>
      <Input
        type="password"
        data-testid="password-input"
        id="password-input"
        onChange={onChange}
      />
      <FormHelperText mb={6}>비밀번호는 8자리 이상 입력해주세요</FormHelperText>
    </>
  );
};

export default PasswordInput;

import { Input, FormLabel, FormHelperText } from "@chakra-ui/react";

const PasswordInput = ({ onChange }: any) => {
  return (
    <>
      <FormLabel>Password</FormLabel>
      <Input type="password" data-testid="password-input" onChange={onChange} />
      <FormHelperText mb={6}>비밀번호는 8자리 이상 입력해주세요</FormHelperText>
    </>
  );
};

export default PasswordInput;

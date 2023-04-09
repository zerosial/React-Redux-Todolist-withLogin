import { Input, FormLabel, FormHelperText } from "@chakra-ui/react";

const EmailInput = ({ onChange }: any) => {
  return (
    <>
      <FormLabel>Email address</FormLabel>
      <Input type="email" data-testid="email-input" onChange={onChange} />
      <FormHelperText>이메일을 입력해 주세요</FormHelperText>
    </>
  );
};

export default EmailInput;

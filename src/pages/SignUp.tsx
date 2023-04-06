import { Button, Container, Input } from "@chakra-ui/react";

const SighUp = () => {
  return (
    <Container maxW={"100%"} p={"16px"}>
      <Input data-testid="email-input" />
      <Input data-testid="password-input" />
      <Button data-testid="signup-button">회원가입</Button>
    </Container>
  );
};

export default SighUp;

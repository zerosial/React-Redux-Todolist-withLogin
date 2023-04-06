import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
} from "@chakra-ui/react";
import { postSignUp } from "components/Api/Sign";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SighUp = () => {
  const [userInput, setUserInput] = useState({
    isDisabled: true,
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  const formHandler = async (e: any) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const isSuccess = await postSignUp({ email, password });
    if (isSuccess) {
      navigate("/signin");
    }
  };

  const emailValueHandler = (e: any) => {
    const email = String(e.target.value);
    if (email.includes("@")) {
      setUserInput((prevState) => {
        return { ...prevState, email: true };
      });
      if (userInput.password) {
        setUserInput((prevState) => {
          return { ...prevState, isDisabled: false };
        });
      }
    } else {
      setUserInput((prevState) => {
        return { ...prevState, email: false, isDisabled: true };
      });
    }
  };

  const passwordValueHandler = (e: any) => {
    const password = String(e.target.value);
    if (password.length >= 8) {
      setUserInput((prevState) => {
        return { ...prevState, password: true };
      });
      if (userInput.email) {
        setUserInput((prevState) => {
          return { ...prevState, isDisabled: false };
        });
      }
    } else {
      setUserInput((prevState) => {
        return { ...prevState, password: false, isDisabled: true };
      });
    }
  };

  return (
    <Container maxW={"50%"}>
      <Grid justifyItems="center">
        <FormControl>
          <form onSubmit={formHandler}>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              data-testid="email-input"
              onChange={emailValueHandler}
            />
            <FormHelperText>이메일을 입력해 주세요</FormHelperText>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              data-testid="password-input"
              onChange={passwordValueHandler}
            />
            <FormHelperText mb={6}>
              비밀번호는 8자리 이상 입력해주세요
            </FormHelperText>
            <Button
              type="submit"
              mb={6}
              data-testid="signup-button"
              w={80}
              isDisabled={userInput.isDisabled}
            >
              회원가입
            </Button>
          </form>
        </FormControl>
      </Grid>
    </Container>
  );
};

export default SighUp;

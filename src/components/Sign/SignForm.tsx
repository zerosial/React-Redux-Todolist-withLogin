import {
  Button,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignForm = ({ title, onSubmit }: any) => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("access_token");
    if (token) {
      navigate("/todo");
    }
  }, [navigate]);

  const emailValueHandler = (e: any) => {
    const email = String(e.target.value);
    if (email.includes("@")) {
      setEmailValid(true);
      if (passwordValid) {
        setIsDisabled(false);
      }
    } else {
      setEmailValid(false);
      setIsDisabled(true);
    }
  };

  const passwordValueHandler = (e: any) => {
    const password = String(e.target.value);
    if (password.length >= 8) {
      setPasswordValid(true);
      if (emailValid) {
        setIsDisabled(false);
      }
    } else {
      setPasswordValid(false);
      setIsDisabled(true);
    }
  };

  return (
    <FormControl>
      <form onSubmit={onSubmit}>
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
          data-testid="signin-button"
          w={80}
          isDisabled={isDisabled}
        >
          {title}
        </Button>
      </form>
    </FormControl>
  );
};

export default SignForm;

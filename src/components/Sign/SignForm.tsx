import { Button, FormControl } from "@chakra-ui/react";
import { useState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

const SignForm = ({ title, onSubmit }: any) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

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
        <EmailInput onChange={emailValueHandler} />
        <PasswordInput onChange={passwordValueHandler} />
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

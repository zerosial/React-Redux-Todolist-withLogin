import { Button, FormControl } from "@chakra-ui/react";
import { useState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { isEmailValid, isPasswordValid } from "utils/validcheck";
import { SignFormProps } from "types/Sign";

const SignForm = ({ title, onSubmit }: SignFormProps) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const emailValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = String(e.target.value);
    if (isEmailValid(email)) {
      setEmailValid(true);
      if (passwordValid) {
        setIsDisabled(false);
      }
    } else {
      setEmailValid(false);
      setIsDisabled(true);
    }
  };

  const passwordValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = String(e.target.value);
    if (isPasswordValid(password)) {
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
          ml={20}
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

import { Button, Container, Divider, Grid, Text } from "@chakra-ui/react";
import { postSignIn } from "components/Api/Sign";
import SignForm from "components/Sign/SignForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("access_token");
    if (token) {
      navigate("/todo");
    }
  }, [navigate]);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const isSuccess = await postSignIn({ email, password });
    if (isSuccess) {
      navigate("/todo");
    }
  };

  return (
    <Container maxW={"50%"}>
      <Grid justifyItems="center">
        <SignForm title={"로그인"} onSubmit={submitHandler} />
        <Divider mb={6} />
        <Text color="gray.300" mb={6}>
          혹시 회원가입이 아직이신가요?
        </Text>
        <Button w={80} onClick={() => navigate("/signup")}>
          회원가입
        </Button>
      </Grid>
    </Container>
  );
};

export default SignIn;

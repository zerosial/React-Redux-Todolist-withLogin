import { Container } from "@chakra-ui/react";
import { setToken } from "components/Api";
import TodoLists from "components/Todo/TodoLists";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("access_token");
    if (token) {
      setToken(token);
    } else {
      navigate("/signin");
    }
  }, [navigate]);

  return (
    <Container maxW={"100%"} p={"16px"}>
      <TodoLists />
    </Container>
  );
};

export default Todo;

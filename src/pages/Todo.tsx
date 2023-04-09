import { Container } from "@chakra-ui/react";
import TodoLists from "components/Todo/TodoLists";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("access_token");
    if (!token) {
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

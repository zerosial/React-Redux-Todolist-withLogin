import { Flex, Button } from "@chakra-ui/react";
import { ColorModeSwitcher } from "ColorModeSwitcher";
import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("access_token");
    if (token) {
      setIsAuth(true);
    }
  }, [navigate]);

  return (
    <>
      <Flex gap={8} h={40}>
        <Link to={"/signin"}>
          <Button isDisabled={isAuth}>로그인</Button>
        </Link>
        <Link to={"/signup"}>
          <Button isDisabled={isAuth}>회원가입</Button>
        </Link>
        <Link to={"/todo/tododetail"}>
          <Button isDisabled={!isAuth}>투두리스트</Button>
        </Link>
        <ColorModeSwitcher />
      </Flex>
      <Outlet />
    </>
  );
};

export default Layout;

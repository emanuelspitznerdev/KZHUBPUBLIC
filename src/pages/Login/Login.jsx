import React, { useContext } from "react";
import Logo from "/src/assets/Logo.svg";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import {
  StyledHeader,
  StyledMain,
  StyledWrapper,
  StyledButton,
} from "./Login.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  return (
    <StyledMain>
      <StyledHeader>
        <img src={Logo} alt="KenzieHub" />
      </StyledHeader>
      <StyledWrapper>
        <h2>Login</h2>
        <LoginForm/>
        <span>Ainda não possui conta?</span>
        <StyledButton onClick={() => navigate("/register")}>Cadastre-se</StyledButton>
      </StyledWrapper>
    </StyledMain>
  );
};

export default Login;

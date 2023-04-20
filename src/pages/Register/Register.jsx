import React from "react";
import RegisterForm from "./RegisterForm/RegisterForm.jsx";
import Logo from "/src/assets/Logo.svg";
import { StyledMain, StyledHeader, StyledWrapper, StyledDiv } from "./Register";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <StyledMain>
      <StyledHeader>
        <img src={Logo} alt="KenzieHubLogo" />
        <button onClick={() => navigate("/")}>Voltar</button>
      </StyledHeader>
      <StyledWrapper>
        <StyledDiv>
          <h2>Crie sua conta</h2>
          <span>Rápido e grátis, vamos nessa!</span>
        </StyledDiv>
        <RegisterForm />
      </StyledWrapper>
    </StyledMain>
  );
};

export default Register;

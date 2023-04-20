import React, { useContext, useState } from "react";
import Logo from "/src/assets/Logo.svg";
import {
  StyledMain,
  StyledWrapper,
  StyledPersonal,
  StyledApllication,
} from "./DashBoard";
import { UserContext } from "../../providers/UserContext";
import DashApplication from "./DashApplication/DashApplication.jsx";

export const DashBoard = () => {

  const { logOutUser, user } = useContext(UserContext);

  return (
    <StyledMain>
      <header>
        <img src={Logo} alt="KenzieHubLogo" />
        <button onClick={() => logOutUser()}>Sair</button>
      </header>
      <StyledWrapper>
        <StyledPersonal>
          <h2>Olá, {user.name}</h2>
          <span>{user.course_module}</span>
        </StyledPersonal>
        <StyledApllication>
          <DashApplication/>
        </StyledApllication>
      </StyledWrapper>
    </StyledMain>
  );
};

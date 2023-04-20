import React, { useContext, useState } from "react";
import { StyledApp, StyledAdd } from "./DashApplication";
import { TechContext } from "../../../providers/TechsContext";
import Plus from '/src/assets/plus.svg'
import DashAddModal from "./DashAddModal/DashAddModal.jsx";
import DashTechList from "./DashTechList/DashTechList.jsx";



const DashApplication = () => {
  const { techList, addIsOn, setAddIsOn } = useContext(TechContext);

  return (
  <StyledApp>
    <StyledAdd>
        <h2>
            Tecnologias
        </h2>
        <button onClick={() => setAddIsOn(true)}>
            <img src={Plus} alt="AddTech" />
        </button>
    </StyledAdd>
    {addIsOn && <DashAddModal/> }
    <DashTechList/>
  </StyledApp>
  );
};

export default DashApplication;



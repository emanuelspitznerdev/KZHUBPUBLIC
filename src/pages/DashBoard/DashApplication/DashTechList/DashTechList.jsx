import React, { useContext, useEffect } from 'react'
import { StyledDivList, StyledUl } from './DashTechList'
import { TechContext } from '../../../../providers/TechsContext'
import DashTechCard from './DashTechCard/DashTechCard.jsx'
import DashEditModal from './DashEditModal/DashEditModal.jsx'

const DashTechList = () => {
  const { techList, editIsOn } = useContext(TechContext);

  return (
    <StyledDivList>
      {editIsOn && <DashEditModal/>}
      <StyledUl>
        {techList.map((tech) => (
          <DashTechCard tech={tech} key={tech.id}/>
        ))}
      </StyledUl>
    </StyledDivList>
  );
};

export default DashTechList
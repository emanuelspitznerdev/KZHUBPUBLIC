import React, { useContext, useEffect } from 'react'
import { StyledLi } from './DashTechCard'
import { TechContext } from '../../../../../providers/TechsContext'
import DashEditModal from '../DashEditModal/DashEditModal.jsx';

const DashTechCard = ({tech}) => {
  
  const { setEditIsOn, setCurrentlyTech } = useContext(TechContext);
  const openModal = () => {
    setEditIsOn(true)
    setCurrentlyTech(tech)
  }
  

  return (
    <>
    <StyledLi onClick={openModal}>
        <h2>
            {tech.title}
        </h2>
        <span>
            {tech.status}
        </span>
    </StyledLi>
    </>
  )
}

export default DashTechCard
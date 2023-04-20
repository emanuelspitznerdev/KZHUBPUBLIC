import React from 'react'
import { StyledModal, StyledDiv, StyledForm, StyledDivSelect, StyledDivButtons } from './DashEditModal'
import X from '/src/assets/X.svg'
import { useContext } from 'react'
import { TechContext } from '../../../../../providers/TechsContext'
import { useForm } from 'react-hook-form'

const DashEditModal = () => {
    const {setEditIsOn, currentlyTech, setCurrentlyTech, editTech, excludeTech} = useContext(TechContext);
    const closeModal = () => {
        setEditIsOn(false)
    }

    const {register, 
        handleSubmit
    } = useForm({})
 
    const handleAtt = (data) => {
        editTech(data, currentlyTech.id);
        setEditIsOn(false);
        setCurrentlyTech({});
    }

    return (
    <StyledModal>
        <StyledDiv>
            <h2>
                Tecnologia Detalhes
            </h2>
            <button>
                <img src={X} alt="Close Details" onClick={closeModal}/>
            </button>
        </StyledDiv>
        <StyledForm onSubmit={handleSubmit(handleAtt)}>
            <label htmlFor='currTech'>Nome do projeto</label>
            <span id='currTech'>
                {currentlyTech.title}
            </span>
            <StyledDivSelect>
            <label htmlFor="status">Selecionar Status</label>
                <select name="status" id="status" {...register("status")}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
            </StyledDivSelect>
            <StyledDivButtons>
                <button type='submit' className='button-save'>
                    Salvar Alterações
                </button>
                <button type='button' className='button-exclude' onClick={() => excludeTech(currentlyTech.id)}>
                    Excluir
                </button>
            </StyledDivButtons>
        </StyledForm>
    </StyledModal>
  )
}

export default DashEditModal
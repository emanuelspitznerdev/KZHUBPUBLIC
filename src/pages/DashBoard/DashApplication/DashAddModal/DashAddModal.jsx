import React, { useContext } from 'react'
import X from '/src/assets/X.svg'
import { StyledModal, StyledClose, StyledForm, StyledSelectDiv } from './DashAddModal'
import { TechContext } from '../../../../providers/TechsContext'
import { useForm } from 'react-hook-form'

const DashAddModal = () => {
  
    const { setAddIsOn, addTech } = useContext(TechContext);

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({});

    const handleAddTech = (data) => {
        addTech(data)
        setAddIsOn(false)
    }

    const closeModal = () => {
        setAddIsOn(false)
    }
  
  return (
    <StyledModal>
        <StyledClose>
            <h2>Cadastrar tecnologia</h2>
            <button>
                <img src={X} alt="CloseAdd" onClick={closeModal}/>
            </button>
        </StyledClose>
        <StyledForm onSubmit={handleSubmit(handleAddTech)}>
            <label htmlFor="title">Nome</label>
            <input type="text" id="title" {...register("title")} placeholder='Digite o nome da Tech'/>
            <StyledSelectDiv>
                <label htmlFor="status">Selecionar Status</label>
                <select name="status" id="status" {...register("status")}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
            </StyledSelectDiv>
            <button type='submit'>Cadastrar Tecnologia</button>
        </StyledForm>
    </StyledModal>
  )
}

export default DashAddModal
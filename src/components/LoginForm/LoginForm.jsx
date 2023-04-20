import React, { useContext, useEffect, useState } from 'react'
import Input from '../Input/Input.jsx'
import { StyledForm } from './LoginForm'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../providers/UserContext.jsx'

const LoginForm = () => {
  const {register, handleSubmit} = useForm();
  const navigate = useNavigate();

  const {user, loginUser} = useContext(UserContext);

  const handleLogin = (data) => {
    loginUser(data);
    navigate('/dashboard');
  }

  return (
    <StyledForm onSubmit={handleSubmit(handleLogin)}>
        <Input
          label="Email"
          type="text"
          placeholder="Digite seu e-mail"
          id="email"
          register={register("email")}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          id="password"
          register={register("password")}
        />
        <button type='submit'>
            Entrar
        </button>
    </StyledForm>
  )
}

export default LoginForm
import React from 'react'
import { StyledDiv } from './Input'


const Input = ({label, type, placeholder, id, register, error, ...rest}) => {
  return (
    <StyledDiv>
        <label htmlFor={id}>
            {label}
        </label>
        <input type={type} placeholder={placeholder} id={id} {...register} {...rest}/>
        {error ? <p>{error}</p> : null }
    </StyledDiv>
  )
};

export default Input
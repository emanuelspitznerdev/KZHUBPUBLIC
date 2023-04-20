import React, { useContext } from "react";
import Input from "../../../components/Input/Input.jsx";
import { StyledForm, StyledDiv } from "./RegisterForm.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { UserContext } from "../../../providers/UserContext.jsx";

const schema = z.object({
  name: z.string().nonempty("Nome é obrigatório!"),
  email: z.string().nonempty("Email é obrigatório!").email("O e-mail é inválido!"),
  password: z.string().nonempty("Senha é obrigatória").min(6, "A senha deve ter seis ou mais caracteres"),
  bio: z.string().nonempty("Escreva sobre você!"),
  contact: z.string().nonempty("Digite uma opção de contato"),
  course_module: z.string(),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });


  const {registerUser} = useContext(UserContext);

  const handleRegisterForm = (data) => {
    console.log(data);
    registerUser(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleRegisterForm)}>
      <Input
        label="Nome"
        placeholder="Digite aqui seu nome"
        type="text"
        id="name"
        register={register("name")}
        error={errors.name?.message}
      />
      <Input
        label="Email"
        placeholder="Digite aqui seu e-mail"
        type="email"
        id="email"
        register={register("email")}
        error={errors.email?.message}
      />
      <Input
        label="Senha"
        placeholder="Digite sua senha"
        type="password"
        id="password"
        register={register("password")}
        error={errors.password?.message}
      />
      <Input
        label="Confirme sua senha"
        placeholder="Confirme sua senha"
        type="password"
        id="confirmPassword"
      />
      <Input
        label="Bio"
        placeholder="Fale sobre você"
        type="text"
        id="bio"
        register={register("bio")}
        error={errors.bio?.message}
      />
      <Input
        label="Contato"
        placeholder="Opção de contato"
        type="text"
        id="contact"
        register={register("contact")}
        error={errors.contact?.message}
      />
      <StyledDiv>
        <label htmlFor="selectRegister">Selecionar Módulo</label>
        <select
          name="selectRegister"
          id="selectRegister"
          {...register("course_module")}
        >
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro Módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo Módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro Módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto Módulo
          </option>
        </select>
      </StyledDiv>
      <button type="submit">Cadastrar</button>
    </StyledForm>
  );
};

export default RegisterForm;

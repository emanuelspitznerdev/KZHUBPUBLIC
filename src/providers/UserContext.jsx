import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [techList, setTechList] = useState([]);

  const loginUser = async (formData) => {
    try {
      const response = await api.post("/sessions", formData);
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
      toast.success("Login realizado com sucesso!");
      setUser(response.data.user);
      setTechList(response.data.user.techs);
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const logOutUser = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
  };

  const registerUser = async (formData) => {
    try {
      const response = await api.post("/users", formData);
      toast.success("Usuário cadastrado com sucesso!");
      navigate("/");
      console.log(response);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const userToken = localStorage.getItem("@TOKEN");
    const token = JSON.parse(userToken);
    const userId = localStorage.getItem("@USERID");
    const userAutoLogin = async () => {
      try {
        const response = await api.get(`/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        setTechList(response.data.techs);
        navigate("/dashboard");
      } catch (error) {
        toast.error("Token expirada!");
      }
    };
    if (userToken && userId) {
      userAutoLogin();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        logOutUser,
        registerUser,
        techList,
        setTechList
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

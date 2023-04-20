import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({children}) => {
    const getToken = localStorage.getItem("@TOKEN");
    const token = JSON.parse(getToken);
    const {techList, setTechList} = useContext(UserContext);
    const [addIsOn, setAddIsOn] = useState(false);
    const [editIsOn, setEditIsOn] = useState(false);
    const [currentlyTech, setCurrentlyTech] = useState({});
    
    const addTech = async (formData) => {
        try {
            const response = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data)
            setTechList([...techList, response.data])
            toast.success("Tech cadastrada com sucesso!")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    

    const excludeTech = (techId) => {
        try {
            const response = api.delete(`/users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const newTechList = techList.filter((tech) => {
                return tech.id !== techId
            })
            setTechList(newTechList);
            setCurrentlyTech({});
            setEditIsOn(false);
            toast.success("Tech removida com sucesso!")
        } catch (error) {
            console.log(error)
        }
    }

    const editTech =  async (formData, techId) => {
        try {
            const response = await api.put(`/users/techs/${techId}`, formData,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const newTechList = techList.map(tech => {
                if(tech.id === techId){
                    return {...tech, ...formData};
                } else {
                    return tech;
                }
            });
            setTechList(newTechList);
            toast.success("Tech Atualizada com sucesso!")
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    
    return (
        <TechContext.Provider value={{addTech, techList, editTech, addIsOn, setAddIsOn, editIsOn, setEditIsOn, currentlyTech, setCurrentlyTech, excludeTech}}> 
            {children}
        </TechContext.Provider>
    )
}
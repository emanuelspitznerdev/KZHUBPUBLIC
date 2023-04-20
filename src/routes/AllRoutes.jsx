import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login.jsx'
import Register from '../pages/Register/Register.jsx'
import { DashBoard } from '../pages/DashBoard/DashBoard.jsx'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { api } from '../services/api.js'
import { UserProvider } from '../providers/UserContext.jsx'
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes.jsx'
import { TechProvider } from '../providers/TechsContext.jsx'



const RoutesMain = () => {

  return (
    <>
    <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <Routes>
        <Route path='/' element={<UserProvider> <Login/> </UserProvider> }/>
        <Route path='/register' element={ <UserProvider> <Register/> </UserProvider> }/>
        <Route path='/dashboard' element={<ProtectedRoutes/>}>
          <Route index element={ <UserProvider><TechProvider><DashBoard/></TechProvider></UserProvider>}/>
        </Route>
    </Routes>
    </>
  )
}

export default RoutesMain
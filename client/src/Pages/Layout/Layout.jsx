import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import HomePage from '../Homepage/homePage'
import './layout.scss'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext.jsx'

function Layout() {
  return (
    <div className='layout'>
      <div className="navbar">
      <Navbar/>
      </div>
      <div className="content">
             <Outlet/>
      </div>
    </div>
  )
}
 function RequireAuth() {
  const {currentUser}=useContext(AuthContext)

  return (
    !currentUser ? ( <Navigate to="/login"/>):
    (
    <div className='layout'>
      <div className="navbar">
      <Navbar/>
      </div>
      <div className="content">
             <Outlet/>
      </div>
    </div>
    ) 
  )
}

export {Layout, RequireAuth};

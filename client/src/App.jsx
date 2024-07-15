import React from 'react'
import Listpage from './Pages/LIstpage/Listpage.jsx'
import {Layout,RequireAuth} from './Pages/Layout/Layout.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Pages/Homepage/homePage.jsx';
import Singlepage from './Pages/singlepage/Singlepage.jsx';
import Profile from './Pages/profile/Profile.jsx';
import Register from './Pages/register/Register.jsx';
import Login from './Pages/login/login.jsx';
import ProfileUpdate from './Pages/updateProfilePage/profileUpdate.jsx';
import NewPostPage from './Pages/AddNewPost/NewPostPage.jsx';
import { ListPageLoader, profilePageLoader, SinglePageLoader } from './lib/loader.js';

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
         {
          path:"/",
          element: <HomePage/>
         }, 
         {
          path:"/list",
           element: <Listpage/>,
          loader: ListPageLoader,
         },
         {
          path:"/:id",
          element: <Singlepage/>,
          loader: SinglePageLoader
         }, 
         
         {
          path:"/register",
          element: <Register/>
         }, 
         {
          path:"/login",
          element: <Login/>
         }, 
      ]
    }, 
    {
      path:"/",
      element:<RequireAuth/>,
      children:[
        {
          path:"/profile",
          element: <Profile/>,
          loader:profilePageLoader
         }, 
        {
          path:"/profile/update",
          element: <ProfileUpdate/>
         }, 
        {
          path:"/addnewpost",
          element: <NewPostPage/>
         }, 
      ]
    }
  
  ]);
  return (
    
    <RouterProvider router={router}/>
  )
}


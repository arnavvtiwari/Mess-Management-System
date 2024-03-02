import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Login_student from './components/Login_student/Login_student.jsx'
import Login_manager from './components/Login_manager/Login_manager.jsx'
import About from './components/About/About.jsx'
import Register from './components/Register/Register.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='login' element={<Login_student/>}/>
      <Route path='login/manager_login' element={<Login_manager/>}/>
      <Route path='login/register' element={<Register/>}/>
    </Route>
    {/* <Route path='/login' element={<Login_student/>}>
      <Route path='/manager' element={<Login_manager/>}/>
    </Route> */}
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

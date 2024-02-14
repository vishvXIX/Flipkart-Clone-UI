import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login.jsx'
import Register from './component/Register.jsx'

const allRoutes = () =>{
  
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App/>}>
          <Route path={"/login"} element={<Login/>}></Route>
          <Route path={"/register"} element={<Register/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

import { RouterProvider } from "react-router-dom"
import Home from "../Pages/Home"
import "./Style.css"

import React from 'react'
import MyRouts from "../Routes/Routes"
import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <>
    <Toaster></Toaster>
    <RouterProvider router={MyRouts}>
          <Home></Home>

    </RouterProvider></>
    
  )
}

export default App

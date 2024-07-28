import { useState } from 'react'
import './App.css'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Portfolio from './Component/Portfolio/Portfolio'
import Notfound from './Component/Notfound/Notfound'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout/Layout'

function App() {
  let router = createHashRouter([
    {
      path: '', element: <Layout/>, children: [
        {path: "" , element: <Home/>},
        {path: "about" , element: <About/>},
        {path: "portfolio" , element: <Portfolio/>},
        {path: "contact" , element: <Contact/>},
        {path: "*" , element: <Notfound/>},
      ]
    }
      ])
  return <>
   <RouterProvider router={router}></RouterProvider>
   </>
}

export default App

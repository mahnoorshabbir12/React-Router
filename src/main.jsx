import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from "./Layout.jsx";
import Home from "./components/header/home/Home.jsx";
import About from "./components/header/about/About.jsx";
import Contact from "./components/header/contact/Contact.jsx";
import User from "./components/header/user/User.jsx";
import Github, { gitInfo } from "./components/github/Github.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       },
//       {
//         path: "user/:userId",
//         element: <User/>
//       },
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= "/" element= {<Layout/>}>
    <Route path= "" element= {<Home/>}/>
    <Route path= "about" element= {<About/>}/>
    <Route path= "contact" element= {<Contact/>}/>
    <Route path= "user/:userId" element= {<User/>}/>
    <Route loader = {gitInfo} path= "github" element= {<Github/>}
    
    />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

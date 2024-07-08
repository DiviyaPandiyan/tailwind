import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from '/home/diviya/work_station/tailwind/router-reacr/src/Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Compony from './components/Compony/Compony'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
     <Route path='' element={<Home/>}/>
     <Route path='About/' element={<About/>}>
     </Route>
  
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Blogs from './components/Blogs'
import Addblog from './components/Addblog'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
function App () 
{
  return (
    <div>
    <Routes>
    <Route path={'/'} element={<Login/>}></Route>
    <Route path={'/signup'} element={<Signup/>}></Route>

    <Route path={'/blogs'} element={<Main child={<Blogs/>}/>}></Route>
    <Route path={'/addblog'} element={<Main child={<Addblog/>}/>}></Route>
    </Routes>

    </div>
  )
}

export default App




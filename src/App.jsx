import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <>
      <Navbar/>
     <div className="container">
     <Home/>
     <Skill/>
     <Project/>
     <Contact/>
     </div>
    </>
  )
}

export default App


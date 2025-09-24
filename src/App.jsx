import { useState } from 'react'
import './App.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Nav from './components/Nav.jsx'
import Cursor from './components/Cursor.jsx'

function App() {

  return (
    <>
    {/* <Cursor/> */}
    <div className="bg-white dark:bg-[#0e100f] text-black dark:text-white transition-colors duration-250">
      <Nav/>
      <Home />
      {/* <Animation/> */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-11/12 xl:w-8/12 flex flex-col justify-center items-center">
          <About />
          <Skills/>
          <Projects/>
          <Contact/> 
        </div>
      </div>
    </div>
    </>
  )
}

export default App

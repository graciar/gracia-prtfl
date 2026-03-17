import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Nav from './components/Nav.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'
import Contact from './components/Contact.jsx'
import Skills from './components/Skills.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import SmoothScrolling from './components/SmoothScrolling.jsx'

const MainContent = () => {
  // 1. Define your sections in order
  const sections = [
    { id: "home", component: <Home /> },
    { id: "about", component: <About /> },
    { id: "skills", component: <Skills /> },
    { id: "projects", component: <Projects /> },
    { id: "contact", component: <Contact /> },
  ];

  return (
    <div className="w-full">
      <Nav />
      {/* <Home /> */}
      <main className="w-full">
        {sections.map((section, i) => (
          <div 
            key={section.id} 
            className={i % 2 !== 0 ? "bg-[#F3F4F4]" : "bg-white"}
          >
            {section.component}
          </div>
        ))}
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
    {/* <SmoothScrolling> */}
    <ScrollToTop/>
      <div className="bg-white dark:bg-[#0e100f] text-black dark:text-white transition-colors duration-250 min-h-screen">
        
        
        <Routes>
          {/* Main Landing Page */}
          <Route path="/gracia-prtfl" element={<MainContent />} />

          {/* Project Details Page - :slug is the dynamic variable */}
          <Route path="/gracia-prtfl/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    {/* </SmoothScrolling> */}
    </BrowserRouter>
  )
}

export default App
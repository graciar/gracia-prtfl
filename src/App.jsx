import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Nav from './components/Nav.jsx'
import Contact from './components/Contact.jsx'
import Skills from './components/Skills.jsx'
// import Experience from './components/Experience.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import SmoothScrolling from './components/SmoothScrolling.jsx'

const MainContent = () => {
  // 1. Define your sections in order
  const sections = [
    { id: "home", component: <Home /> },
    { id: "about", component: <About /> },
    { id: "skills", component: <Skills /> },
    // { id: "experience", component: <Experience /> },
    { id: "projects", component: <Projects /> },
    { id: "contact", component: <Contact /> },
  ];

  return (
    <div className="w-full">
      {/* <Home /> */}
      <main className="w-full">
        {sections.map((section, i) => (
          <div
            key={section.id}
            className="w-full"
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
      <Nav />
      {/* <SmoothScrolling> */}
      <ScrollToTop />
      <div className="bg-[#fafafa] dark:bg-[#0a0a0a] text-[#111] dark:text-[#f3f3f3] transition-colors duration-500 min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">


        <Routes>
          {/* Main Landing Page */}
          <Route path="/gracia-prtfl" element={<MainContent />} />
        </Routes>
      </div>
      {/* </SmoothScrolling> */}
    </BrowserRouter>
  )
}

export default App
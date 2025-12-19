import { Routes, Route } from 'react-router'
import Navigation from './components/sections/Navigation'
import Home from './components/sections/Home'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import ProjectDetails from './components/projectFolder/ProjectDetails'
import Aboutme from './components/sections/Aboutme'


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <div id="home">
              <Home />
            </div>
            <div id="experience">
              <Experience />
            </div>
            <div id="skills">
              <Skills />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="aboutme">
              <Aboutme />
            </div>
          </>
        } />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  )
}

export default App
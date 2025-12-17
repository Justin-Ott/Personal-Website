import { Routes, Route } from 'react-router'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Aboutme from './components/Aboutme'
import Projects from './components/Projects'
import ProjectDetails from './components/projectFolder/ProjectDetails'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  )
}

export default App
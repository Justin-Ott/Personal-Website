import { Routes, Route } from 'react-router'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Aboutme from './components/Aboutme'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
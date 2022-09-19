import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Button>Test</Button>
    </div>
  )
}

export default App

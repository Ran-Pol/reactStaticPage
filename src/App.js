import React from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'
import './App.css'
function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  const toggleDarkMode = ()=>{
    setDarkMode(prev=>!prev)
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode} />
    </div>
  )
}

export default App

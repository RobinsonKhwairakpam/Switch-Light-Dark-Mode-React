import Main from './components/Main';
import Navbar from './components/Navbar'
import React, { useState } from 'react'
import './index.css';

function App() {
  const [mode, setMode] = useState(false)
  const toggleMode = () => {
    setMode( prevMode => !prevMode)
  }
  return (
    <div className='container'>
      <Navbar mode = {mode} toggleMode = {toggleMode} />
      <Main mode = {mode} />
    </div>
  );
}

export default App;

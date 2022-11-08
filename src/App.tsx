import React, { useState } from 'react';
import './App.css';
import Register from './views/register/register';
import '../src/views/register/register.css'

function App() {
  const [darkmode, setdarkmode] = useState('App')
  const [truee, settruee] = useState(true)
  //DARK MODE
  const darkMode = () => {
    settruee(!truee)
    if (truee === true) {
      setdarkmode('AppDarkMode')
    }
    else {
      setdarkmode('App')
    }

  }
  return (
    <div className={darkmode}>
      <div className="sliderDiv"><input type="checkbox" name="" id="" className="sliderbox" onClick={darkMode} /></div>
      <Register />
    </div>
  );
}

export default App;

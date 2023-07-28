
import './App.css';
import React, { useState } from 'react'

import About from './components/About';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Alerts from './components/Alerts';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
      // document.title='TextUtils - Dark Mode' -> this will dynamically change the title. we can make the title blink as well using set interval method, this is actually bad UX
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title='TextUtils' abouttext='About Us' mode={mode} togglemode={togglemode} />
        <Alerts alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About/>}/> */}
            {/* <Route exact path="/" element={<Textform showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} />}/> */}
            <Textform showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>

  );
}

export default App;

// remember that switch has been replaced by Routes component in React, and now your custom component will be passed within the Route tag in the element tag : element{<custom component name/>}
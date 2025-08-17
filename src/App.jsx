import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
// import Aboutus from './components/Aboutus'
import Alert from './components/Alert'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('white')
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
        msg:message,
        t:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = (Color)=>{
      setMode(Color)
      document.body.style.backgroundColor = Color
      showAlert(`Enable ${Color} mode`,"Success")
      document.title = `TextUtils- ${Color}`
  }
  return (
    <>
      {/* <Router> */}
      <Navbar 
        Name="Maaz" 
        about="About Maaz" 
        devName="Maaz Ahmad" 
        mode={mode} 
        toggleMode={toggleMode} 
      />

      <Alert alert={alert} />
      <Textform showAlert={showAlert} contact="Enter Text to analyze" mode={mode} />
      {/* <Routes>
        <Route path="/aboutus" element={<Aboutus mode={mode} />} />
        <Route path="/" element={} />
      </Routes> */}
    {/* </Router> */}
    </>
  )
}

export default App

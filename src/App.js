import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("dark");  // ✅ Fixed state variable name
  const[alert, setAlert] = useState("Alert");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    
  }
  

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#333";
      showAlert("Dark mode has been enabled", "success");
} 
else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* ✅ Pass toggleMode as a prop */}
      <Navbar title="Card" mode={mode} toggleMode={toggleMode} />  
      <div className="container mb-3">
      <Alert alert={alert}/>
        <TextForm heading="Enter the text to analyze below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;


/**?git status
git add .
git commit -m "Fixed toggleMode issue in App.js"
git push origin main */
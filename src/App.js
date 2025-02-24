import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("dark");  // ✅ Fixed state variable name

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#333";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
    }
  };

  return (
    <>
      {/* ✅ Pass toggleMode as a prop */}
      <Navbar title="Card" mode={mode} toggleMode={toggleMode} />  
      <div className="container mb-3">
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
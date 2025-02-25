import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");  // Default mode is light
  const [alert, setAlert] = useState(null);   // Alert state

  // Function to show alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    // Hide alert after 2 seconds
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Function to toggle dark/light mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#333";
      showAlert("Dark mode has been enabled", "success");  // ✅ Show alert when dark mode is enabled
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="Card" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />  {/* ✅ Alert component */}
      <div className="container mb-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;

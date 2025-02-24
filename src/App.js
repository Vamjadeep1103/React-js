import logo from './logo.svg';
import './App.css';

 import Navbar from './components/Navbar'; 
// import About from './components/About';
 import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {

  const [mode,setmode]=useState("Dark")
return (
      
    // //  <  Navbar title="Menu"   
    // //     aboutText="About Textutils"
    // //     Action="Main Details"
    // //     Anotheraction ="More info."
    // //     Somethingelsehere="About us"  /> 
    // <>
    // //  
    // //     aboutText="About Textutils"
    // //     Action="Main Details"
    // //     Anotheraction ="More info."
    // //     Somethingelsehere="About us" 
    <> 
   <Navbar title=" card"  mode={mode}/> 
    <div className="container mb-3"> 
       <TextForm heading="Enter the text to analyze below"/>  
  {/* <About/>  */}
    </div>
    </> 
  // <Navbar/>
); 
  }
export default App;

import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }

  }
  return (
    <>
      <Navbar title="Text Converter" about="About Us" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <div className="container">
        <TextForm mode ={mode} />
        <About mode={mode} />
      </div>
    </>
  );
}

export default App;

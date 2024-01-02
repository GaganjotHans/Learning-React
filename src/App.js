import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
    {/* <Router>
      <Navbar
        title="Text Converter"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container">
        <Routes>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <TextForm mode={mode} />
          </Route>
        </Routes>
      </div>
      </Router> */}
      <Router>
     
      <Navbar
        title="Text Converter"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
        <Routes>
          <Route exact path="/" element={<TextForm mode={mode} />}/>
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;

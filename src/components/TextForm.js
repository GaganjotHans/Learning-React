import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleConvertClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'black'}}>
        <h2>Text Converter</h2>
        <textarea className="form-control"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter text here"
          style={{backgroundColor: props.mode=== 'dark'?'grey':'white', color: props.mode=== 'dark'?'white':'black'}}
        />
        <br />
        <button className="btn btn-primary " onClick={handleConvertClick}>Convert to Uppercase</button>
      </div>

      <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <h5>{text.split(" ").length} words and {text.length} Characters</h5>
      </div>
    </>
  );
}

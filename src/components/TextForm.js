import React, { useState } from "react";

export default function TextForm() {
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
      <div className="container my-3">
        <h2>Text Converter</h2>
        <textarea className="form-control"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter text here"
        />
        <br />
        <button className="btn btn-primary " onClick={handleConvertClick}>Convert to Uppercase</button>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <h5>{text.split(" ").length} words and {text.length} Characters</h5>
      </div>
    </>
  );
}

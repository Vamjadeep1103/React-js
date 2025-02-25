import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // Convert text to uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  // Convert text to lowercase
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  // Clear text
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };

  // Copy text
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!", "success");
  };

  // Handle text change
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#555" : "white",
            color: props.mode === "dark" ? "white" : "black"
          }}
          rows="5"
        ></textarea>
      </div>
      <button className="btn btn-primary me-2" onClick={handleUpClick}>Uppercase</button>
      <button className="btn btn-primary me-2" onClick={handleLowClick}>Lowercase</button>
      <button className="btn btn-primary me-2" onClick={handleClearClick}>Clear</button>
      <button className="btn btn-primary me-2" onClick={handleCopy}>Copy</button>

      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>{text.split(/\s+/).filter(word => word !== "").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to preview it here"}</p>
      </div>
    </div>
  );
}

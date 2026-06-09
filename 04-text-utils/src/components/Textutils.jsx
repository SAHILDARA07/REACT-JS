import React, { useState } from "react";

const TextAnalyzer = () => {
  const [inputText, setInputText] = useState("");

  const convertToUpper = () => {
    setInputText(inputText.toUpperCase());
  };

  const convertToLower = () => {
    setInputText(inputText.toLowerCase());
  };

  const clearText = () => {
    setInputText("");
  };

  const totalWords =
    inputText.trim() === ""
      ? 0
      : inputText.trim().split(/\s+/).length;

  const readingTime = (totalWords / 200).toFixed(2);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Text Utils</h1>

      <div className="mb-3">
        <label className="form-label fw-bold">
          Enter Your Text
        </label>

        <textarea
          className="form-control"
          rows="5"
          placeholder="Type your text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
      </div>

      <div className="my-3">
        <button
          className="btn btn-primary me-2"
          onClick={convertToUpper}
        >
          Uppercase
        </button>

        <button
          className="btn btn-warning me-2"
          onClick={convertToLower}
        >
          Lowercase
        </button>

        <button
          className="btn btn-danger"
          onClick={clearText}
        >
          Clear
        </button>
      </div>

      <hr />

      <div className="mt-3">
        <h3>Text Preview</h3>

        <div className="border rounded p-3 bg-light">
          
        </div>
      </div>

      <div className="mt-4">
        <h3>Text Statistics</h3>

        <ul className="list-group">
          <li className="list-group-item">
            Total Characters : {inputText.length}
          </li>

          <li className="list-group-item">
            Total Words : {totalWords}
          </li>

          <li className="list-group-item">
             Reading Time : {readingTime} min
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TextAnalyzer;
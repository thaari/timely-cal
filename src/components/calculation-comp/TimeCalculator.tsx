import React, { useState, useEffect } from "react";
import PopupModal from "../introduction-Popup/IntroductionPopup";

import "./TimeCalculator.css";

function CAlApp() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const calculateResult = () => {
    try {
      // Split the input string by '+' and sum the values
      const timeArray = input.split("+");
      const totalSeconds = timeArray.reduce((total, time) => {
        const [minutes, seconds] = time.split(".").map(parseFloat);
        return total + minutes * 60 + seconds;
      }, 0);

      const handleButtonClick = (value: string) => {
        if (value === "." && input.includes(".")) {
          return; // Allow only one decimal point
        }
        setInput((prevInput) => prevInput + value);
      };

      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      setResult(`${minutes}.${seconds}`);
    } catch (error) {
      setResult("Invalid input");
    }
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
    setResult(""); // Clear the result when backspacing
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key;

      // Define a map for key mappings (e.g., '1' key maps to button with value '1')
      const keyMap: { [key: string]: string } = {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "0": "0",
        "+": "+",
        "-": "-",
        ".": ".",
        Enter: "=", // Enter key for equals
        Backspace: "←", // Backspace key for backspace
        Escape: "AC", // Escape key for clear
      };

      // If the pressed key is in the keyMap, simulate a button click
      if (keyMap[key]) {
        if (key === "Enter") {
          calculateResult();
        } else if (key === "Backspace") {
          handleBackspace();
        } else if (key === "Escape") {
          clearInput();
        } else {
          handleButtonClick(keyMap[key]);
        }
      }
    };

    // Add the event listener to the window
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      <div className="Bg">
        <div className="close-btn"><button onClick={openModal}>How to</button></div>
        
        <PopupModal isOpen={isModalOpen} onClose={closeModal}>
          <h2>Instructions</h2>
          <ul>
            <li>when add only minutes, make sure to add a 0 as a seconds. (ex: 1 = 1.0)</li>
            <li>make sure to press "equal sign (=)" to calculate.</li>
          </ul>
        </PopupModal>
      </div>

      <div className="App">
        <div className="calculator">
          <h1>Time Calculator</h1> {/* Add the title here */}
          <input type="text" value={input} readOnly />
          <div className="buttons">
            <button onClick={() => handleButtonClick("7")}>7</button>
            <button onClick={() => handleButtonClick("8")}>8</button>
            <button onClick={() => handleButtonClick("9")}>9</button>
            <button onClick={() => handleButtonClick("+")}>+</button>
            <button onClick={() => handleButtonClick("4")}>4</button>
            <button onClick={() => handleButtonClick("5")}>5</button>
            <button onClick={() => handleButtonClick("6")}>6</button>
            <button onClick={() => handleButtonClick("-")}>-</button>
            <button onClick={() => handleButtonClick("1")}>1</button>
            <button onClick={() => handleButtonClick("2")}>2</button>
            <button onClick={() => handleButtonClick("3")}>3</button>
            <button onClick={() => handleButtonClick("0")}>0</button>
            <button onClick={() => handleButtonClick(".")}>.</button>{" "}
            {/* Add this button */}
            <button onClick={calculateResult}>=</button>
            <button onClick={clearInput}>AC</button>
            <button onClick={handleBackspace}>←</button>
          </div>
        </div>
        <div className="result-container">
          <span>{result}</span>
        </div>
      </div>
    </>
  );
}

export default CAlApp;

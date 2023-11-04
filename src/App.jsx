import React from "react";
import Homepage from "./components/Homepage";
import { useState } from "react";
import StartGame from "./components/StartGame";

const App = () => {

  const [isGameStarted, setIsGameStarted] = useState(true)

  const toggleGameStarted = () => {
    setIsGameStarted(prev => !prev)
  }
  
  

  return (
    <div className="font-poppins">
      {isGameStarted ? <Homepage toggle={toggleGameStarted} /> : <StartGame />}
    </div>
  );
};

export default App;

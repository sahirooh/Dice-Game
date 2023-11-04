import React from 'react'
import TotalScore from './TotalScore'
import PickNumber from './PickNumber'
import RollDice from './RollDice'
import { useState } from 'react'
import Rules from './Rules'

const StartGame = () => {

const [selectedNumber, setSelectedNumber] = useState();
const [currentDice, setCurrentDice] = useState(2);
const [totalScore, setTotalScore] = useState(0);
const [error, setError] = useState("");
const [showRules, setShowRules] = useState(false);

const randomDice = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const rollDice = () => {

  if(!selectedNumber) {
    setError("Please select a number");
    return;
  };

  const randomNumber = randomDice(1, 6);


  setCurrentDice((prev) => randomNumber);

  selectedNumber === randomNumber ? setTotalScore((prev) => prev + randomNumber) : setTotalScore(prev => prev - 1);

  setSelectedNumber(undefined);
};

const toggleRules = () => {
  setShowRules(prev => !prev)
}

  return (
    <div>
        <div className='flex max-w-screen-xl justify-between items-center mt-4 mx-auto'>
            <TotalScore score={totalScore}/>
            <PickNumber error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
        </div>


        <div className='flex'>
        <div className='flex max-w-[560px] mt-[150px]'>
          {showRules ? <Rules /> : null}
        </div>
          <div className='fixed ml-[600px]'>
            <RollDice setScore={setTotalScore} toggle={toggleRules} rollDice={rollDice} currentDice={currentDice} />
          </div>
        </div>

    </div>
  )
}

export default StartGame
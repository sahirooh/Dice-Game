
const RollDice = ({setScore, toggle, rollDice, currentDice}) => {

  const resetScore = () => {
    setScore(0);
  }

  return (
    <div className='flex flex-col gap-9 max-w-[250px] m-auto mt-10'>
      <div className='flex flex-col gap-4'>
          <img
          onClick={rollDice}
          className='cursor-pointer'
          src={`/images/dice/dice_${currentDice}.png`} alt="dice1" />
          <p className='font-medium text-2xl text-center'>Click on dice to roll</p>
      </div>

      <div className='flex flex-col gap-6 m-auto'>
        <button
        onClick={resetScore}
        className="w-[220px] px-4 py-2 font-semibold border border-black rounded">
          Reset Score
        </button>
        <button
          onClick={toggle}
         className="w-[220px] px-4 py-2 bg-black text-white font-semibold border border-black rounded">
          Show Rules
        </button>
      </div>
    </div>
  );
}

export default RollDice
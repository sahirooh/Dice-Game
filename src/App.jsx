import React from "react";

const App = () => {
  return (
    <div className="font-poppins">
      <div className="container flex max-w-[1182px] gap-1 max-h-[522px] items-center mx-auto mt-10">
        <div className="flex max-w-[650px] max-h-[522px]">
          <img src="/images/dices.png" alt="dice image" />
        </div>

        <div className="flex flex-col">
          <h1 className="font-bold text-8xl">DICE GAME</h1>
          <div className="flex justify-end">
            <button className="bg-black text-white px-4 py-2 w-[220px] rounded-[5px] mt-4">
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

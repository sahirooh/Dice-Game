import React from "react";

const Homepage = ({ toggle }) => {
  return (
    <div>
      <div className="container flex max-w-[1182px] gap-1 h-[100vh] items-center m-auto">
        <div className="">
          <img src="/images/dices.png" alt="dice image" />
        </div>

        <div className="flex flex-col">
          <h1 className="font-bold text-8xl">DICE GAME</h1>
          <div className="flex justify-end">
            <button
              onClick={toggle}
              className="bg-black text-white px-4 py-2 w-[220px] rounded-[5px] mt-4 border transition ease-out duration-[1000ms]
            hover:bg-white hover:text-black hover:border hover:border-black hover:ease-in hover:duration-300"
            >
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

import React from 'react'

const Rules = () => {
  return (
    <div className="flex flex-col bg-[#FBF1F1] max-w-[600px] gap-6">
      <h1 className='font-bold text-2xl ml-4'>How to play dice game</h1>

      <div className='font-medium ml-4'>
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            After click on dice if selected number is equal to dice number you will
            get same point as dice
          </p>
          <p>If you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </div>
  );
}

export default Rules
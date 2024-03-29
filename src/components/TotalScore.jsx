import React from 'react'

const TotalScore = ({score}) => {
  return (
    
      <div className='text-center max-w-[135px]'>
        <h1 className='font-medium text-[100px] leading-[100px]'>{score}</h1>
        <p className='font-medium text-2xl'>Total Score</p>
      </div>
  );
}

export default TotalScore
import React, { useState } from 'react'

const PickNumber = () => {

    const numbers = [1,2,3,4,5,6];

    const [selectedNumber, setSelectedNumber] = useState();
    
  return (
    <div>
        {
            numbers.map((value, index) => (
                <div 
                className = {`w-[72px] h-[72px] border border-black flex items-center justify-center ${value === selectedNumber ? 'bg-black text-white' : 'bg-white text-black'}`}
                key={index}
                onClick={() => setSelectedNumber(value)}
                >
                    {value}
                </div>
            ))
        }
    </div>
    
  )
}

export default PickNumber
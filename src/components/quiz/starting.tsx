import React, { useState, useEffect } from 'react'

import { Timer } from '../timer.tsx'

export const Starting = ({ next }) => {
  const [timeLeft, setSeconds] = useState(10)
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(timeLeft => timeLeft - 1);
      if (timeLeft === 1) {
        next()
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, next]);
  return (
    <div>
      <div className='timer__big f jcc aic mxa my1 py1'>
        <Timer time={String(timeLeft).padStart(2, '0')} animate={true} />
      </div>
    </div>
  )
}
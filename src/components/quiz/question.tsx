import React, { useState, useEffect } from 'react'

import { Timer } from '../timer.tsx'


export const Question = ({ step, next, data, stop }) => {
  const [isSelected, setSelected] = useState(false)
  const [answer, setAnswer] = useState(null)
  const [timeLeft, setSeconds] = useState(10)
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(timeLeft => timeLeft - 1);
    }, 1000);
    if (timeLeft === 0 || isSelected) {
      setAnswer(false)
      setSelected(true)
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [timeLeft, next, isSelected]);
  const selectAnswer = (answer) => {
    console.log('hey ', answer)
    setAnswer(answer)
    setSelected(true)
  }
  return (
    <div className='quiz__question y f jcb cb'>
      <div className='quiz__header quiz__rows f jcb aist fw rel z1'>
        <div>
          <span>{step} of 10</span>
        </div>
        <div className='x block' />
        <div>
          <button onClick={() => stop()} className='button button--yellow x caps'>
            Give Up
          </button>
        </div>
      </div>
      <div className='quiz__main quiz__rows f y jcb aist fw'>
        <div className=' jcc aic f'>
          <div className='p1'>
            <div className='timer__small'>
              <Timer selected={isSelected} time={String(timeLeft).padStart(2, '0')} animate={true} />
            </div>
          </div>
        </div>
        <div className='f jcc aic bg-white'>
          <div className='p1'>
            <img className='x' alt='chair' src={data.chair} />
            <p>&nbsp;
              {answer !== null && (
                <span>{data.answer}</span>
              )}
            </p>
          </div>
        </div>
        <div className='f jcc quiz__choices aic'>
          <div>
            <p>{data.help}</p>
            {data.choices.map(choice => (
              <div key={choice.id} className='my05'>
                <button onClick={() => selectAnswer(choice.answer)} className='button button--black caps'>{choice.item}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='quiz__footer quiz__rows f jcb aist fw rel z1'>
        <div>  
          <button className='button button--yellow x caps'>
            Share
          </button>
        </div>
        <div className='x block'>
          {answer !== null && (
            <button className='quiz__next' onClick={next}>
              Next
            </button>
          )}
        </div>
        <div className='x block' />
      </div>
    </div>
  )
}
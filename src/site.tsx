import React, { useState } from 'react'


import { Timer } from './components/timer.tsx'
import { Game } from './components/game.tsx'

export const Site = () => {
  const [playing, setPlaying] = useState(false)
  return (
    <div>
      <div className='abs z2'>
        {playing && (<Game stop={() => setPlaying(false)} />)}
      </div>
      <div className='rel container p1 outer mxa x f jcb ais'>
        <h1 className='rel'>
          How much is<br />that chair?
          <svg className='home__arrow abs' width="179" height="226" viewBox="0 0 179 226" fill="none">
            <path d="M2 2.07444C56.9 0.441535 111.4 25.8258 133.3 63.2341C136.9 69.3946 139.7 76.0746 138.6 82.7547C137.5 89.4347 131.5 95.9664 122.7 97.5993C113.9 99.2322 103.4 93.8881 104.1 87.2081C104.7 81.196 113.3 77.1138 121.4 76.4457C144.9 74.516 163.2 91.7357 170.6 108.436C187.1 145.547 172.4 189.19 134.4 216.207" stroke="#282626" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M132.9 189.636C132.6 195.499 133.3 201.289 132.8 207.152C132.3 213.016 130.6 218.954 125.8 223.63C139.4 216.282 153.4 208.711 169.6 205.445" stroke="#282626" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </h1>
        <button onClick={() => setPlaying(true)} className='button caps button--yellow'>
          Start Playing
        </button>
      </div>
      <div>
        <div className='home__chair x container mxa rel outer p1'>
          <div className='home__chair-fact ac f jcc aic abs'>
            <span>How much do you think that is??</span>
          </div>

          <div className='home__chair-fact ac f jcc aic abs'>
            <span>Can't be more than $1,000</span>
          </div>
          <img src='chairs/chair-1.jpg' className='x' alt='chair' />
          <div className='chair__buttons abs mb1 p05 bottom mxa x left f jcc aic'>
            <div className='f jcc bg-yellow chair__buttons-wrapper aic'>
              <button className='button button--black caps'>Under 1k</button>
              <span className='block mx1'>How much is this?</span>
              <button className='button button--black caps'>Over 1k</button>
            </div>
          </div>
        </div>
        <div className='f jcb ais fw x home__guessing container mxa outer'>
          <div className='x c5'>
            <h2>Who really knows? Guessing the price of chairs is hard, really hard. <br /><br />
            Is it the real deal or a really good knock off? or just ugly and expensive?</h2>
          </div>
          <div className='x c5'>
            <div className='home__chair-2 x container mxa rel p1'>
              <div className='home__chair-fact three ac f jcc aic abs'>
                <span>How much do you think that is??</span>
              </div>
              <img src='chairs/chair-2.jpg' className='x' alt='chair' />
              <div className='chair__buttons abs mb1 p05 bottom mxa x left f jcc aic'>
                <div className='f jcc bg-yellow chair__buttons-wrapper aic'>
                  <button className='button button--black caps'>Real</button>
                  <span className='block mx1'>Real or nah?</span>
                  <button className='button button--black caps'>No Way</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='outer'>
          <div className='timer__big f jcc aic mxa my1 py1'>
            <Timer time={'07'} />
          </div>
          <div className='ac'>
            <p>You’ll have 10 seconds to guess, <br />so no looking stuff up.</p>
          </div>
        </div>
      </div>
      <div className='marquee bcw rel oh f mxa aic al x'>
        <button className='marquee__inner bg-yellow ss12' onClick={() => setPlaying(true)}>
          <span className='h1 inline-block '>Start Playing  ︎✺  Start Playing  ︎✺</span>
          <span className='h1 inline-block '>Start Playing  ︎✺  Start Playing  ︎✺</span>
          <span className='h1 inline-block '>Start Playing  ︎✺  Start Playing  ︎✺</span>
          <span className='h1 inline-block '>Start Playing  ︎✺  Start Playing  ︎✺</span>
          <span className='h1 inline-block '>Start Playing  ︎✺  Start Playing  ︎✺</span>
          <span className='h1 inline-block '>Start Playing  ︎✺  Start Playing  ︎✺</span>
          <span className='h1 inline-block '>Start Playing  ︎✺  Start Playing  ︎✺</span>
        </button>
      </div>
    </div>
  )
}
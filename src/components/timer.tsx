import React from 'react'

import cx from 'classnames'

export const Timer = ({ time, animate, selected }) => {
  // stopAnimation () {
  //   const timer = document.querySelector('.timer__pie')
  //   timer.style.webkitAnimationPlayState = 'paused'
  // }
    // const { time } = this.props
    // if (this.props.selected === true) {
    //   this.stopAnimation()
    // }
  return (
    <div className='rel x y f jcc aic'>
      <div className='abs p21 bold regular ac cb js-timer-value z1'>
        <h1 className='timer__value'>
          {time}
        </h1>
      </div>
      <svg className={cx('timer abs left top block fill-x fill-y', selected && 'paused', animate && 'animate')} viewBox='0 0 63.6619772368 63.6619772368'>
        <circle className='timer__pie' cx='31.8309886184' cy='31.8309886184' r='15.9154943092' />
      </svg>
    </div>
  )
}
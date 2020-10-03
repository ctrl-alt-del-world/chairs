import React from 'react'

import cx from 'classnames'
import { Strider, Step } from 'react-strider'

import { Starting } from './quiz/starting.tsx'
import { Question } from './quiz/question.tsx'
import { data } from './api/data.ts'


export const Game = ({ isPlaying, stop }) => {
  return (
    <div className={cx('quiz fix x y top left', isPlaying && 'show')}>
      <Strider activeIndex={0} transitionSpeed={500}>
        <Step>
          {({ next, active, hiding, activeIndex }) => (
            <div className={cx('quiz__step f jcc aic x y', {
              'is-active': active,
              'is-hiding': hiding
            })}>
              <Starting
                number={activeIndex}
                next={next}
                />
            </div>
          )}
        </Step>
        <Step>
          {({ next, active, hiding, activeIndex }) => {
            return (
              <div className={cx('quiz__step y', {
                'is-active': active,
                'is-hiding': hiding
              })}>
                <Question
                  next={next}
                  stop={stop}
                  step={activeIndex}
                  data={data[activeIndex]} />
              </div>
              )
            }}
        </Step>
        <Step>
          {({ next, active, hiding, activeIndex }) => {
            return (
              <div className={cx('quiz__step y', {
                'is-active': active,
                'is-hiding': hiding
              })}>
                <Question
                  next={next}
                  stop={stop}
                  step={activeIndex}
                  data={data[activeIndex]} />
              </div>
              )
            }}
        </Step>
        <Step>
          {({ next, active, hiding, activeIndex }) => {
            return (
              <div className={cx('quiz__step y', {
                'is-active': active,
                'is-hiding': hiding
              })}>
                <Question
                  next={next}
                  stop={stop}
                  step={activeIndex}
                  data={data[activeIndex]} />
              </div>
              )
            }}
        </Step>
        <Step>
          {({ next, active, hiding, activeIndex }) => {
            return (
              <div className={cx('quiz__step y', {
                'is-active': active,
                'is-hiding': hiding
              })}>
                <Question
                  next={next}
                  stop={stop}
                  step={activeIndex}
                  data={data[activeIndex]} />
              </div>
              )
            }}
        </Step>
      </Strider>
    </div>
  )
}

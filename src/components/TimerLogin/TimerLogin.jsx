import React, { useEffect, useRef, useState } from 'react'
import './TimerLogin.css'

const TimerLogin = () => {
  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')
  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('Jul 25, 2024 00:00:00').getTime();
  
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
  
      const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
      const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

  
      if (distance < 0) {
        clearInterval(interval.current)
      } else {
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
  
    }, 1000)
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval.current)
    };
  });

  return (
    <div className='timer-container-login'>
      <div className='timer-block-login'>
        <section className='timer-section-login'>
          <p className='timer-section-number-login'>{timerDays}</p>
          <p className='timer-section-text-login'>day</p>
        </section>
        <span className='timer-span'>:</span>
        <section className='timer-section-login'>
          <p className='timer-section-number-login'>{timerHours}</p>
          <p className='timer-section-text-login'>hr</p>
        </section>
        <span className='timer-span'>:</span>
        <section className='timer-section-login'>
          <p className='timer-section-number-login'>{timerMinutes}</p>
          <p className='timer-section-text-login'>min</p>
        </section>
        <span className='timer-span'>:</span>
        <section className='timer-section-login'>
          <p className='timer-section-number-login'>{timerSeconds}</p>
          <p className='timer-section-text-login'>sec</p>
        </section>
      </div>
    </div>
  )
}

export default TimerLogin
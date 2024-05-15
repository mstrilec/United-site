import React, { useEffect, useRef, useState } from 'react'

const Countdown = () => {
  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')
  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('Jul 20, 2024 00:00:00').getTime();
  
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
    <div className='timer-container'>
      <section className='timer-section'>
        <p className='timer-section-number'>{timerDays}</p>
        <p className='timer-section-text'>Days</p>
      </section>
      <section className='timer-section'>
        <p className='timer-section-number'>{timerHours}</p>
        <p className='timer-section-text'>Hours</p>
      </section>
      <section className='timer-section'>
        <p className='timer-section-number'>{timerMinutes}</p>
        <p className='timer-section-text'>Minutes</p>
      </section>
      <section className='timer-section'>
        <p className='timer-section-number'>{timerSeconds}</p>
        <p className='timer-section-text'>Seconds</p>
      </section>
    </div>
  )
}

export default Countdown
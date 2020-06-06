import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const calculateTimeLeft = (): {
    hours: number;
    seconds: number;
    minutes: number;
    days: number;
  } => {
    const difference = +new Date('2020-07-11') - +new Date();

    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className="flex items-center p-3 md:p-10 text-center justify-center bg-white mt-4 rounded-15">
      <span className="text-md md:text-4xl ml-1 md:ml-3">{timeLeft.days}</span>
      <span className="text-md md:text-xl opacity-75 ml-1 md:ml-3">days,</span>
      <span className="text-md md:text-4xl ml-1 md:ml-3">{timeLeft.hours}</span>
      <span className="text-md md:text-xl opacity-75 ml-1 md:ml-3">hours,</span>
      <span className="text-md md:text-4xl ml-1 md:ml-3">
        {timeLeft.minutes}
      </span>
      <span className="text-md md:text-xl opacity-75 ml-1 md:ml-3">
        minutes,
      </span>
      <span className="text-md md:text-4xl ml-1 md:ml-3">
        {timeLeft.seconds}
      </span>
      <span className="text-md md:text-xl opacity-75">seconds,</span>
    </div>
  );
};

export default Countdown;

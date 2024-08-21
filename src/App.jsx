import './App.css'
import React, { useState, useEffect } from 'react';

function App() {

  const weddingDate = new Date('2024-10-3'); // ضع تاريخ زواجك هنا
  const [timeRemaining, setTimeRemaining] = useState({});

  const calculateTimeRemaining = () => {
    const now = new Date();
    const totalMilliseconds = weddingDate - now;

    // إذا كان الوقت المتبقي أقل من صفر، نعيد الوقت إلى صفر
    if (totalMilliseconds < 0) {
      setTimeRemaining({ weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
      return;
    }

    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const milliseconds = Math.floor((totalMilliseconds % 1000) / 10); // اجزاء من الثانية

    const weeks = Math.floor(totalSeconds / (7 * 24 * 60 * 60));
    const days = Math.floor((totalSeconds % (7 * 24 * 60 * 60)) / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    setTimeRemaining({ weeks, days, hours, minutes, seconds, milliseconds });
  };

  useEffect(() => {
    calculateTimeRemaining();
    const intervalId = setInterval(calculateTimeRemaining, 100);

    return () => clearInterval(intervalId); // تنظيف المؤقت عند التفكيك
  }, []);

  return (
    <div className="countdown-timer">
      <h1>Time Left</h1>
      <div className="time-display">
        <div className="time-unit">
          <div>
            <span>{timeRemaining.weeks}</span>
            <span> W</span>
          </div>
        </div>
        <div className="time-unit">
          <div>
            <span>{timeRemaining.days}</span>
            <span> D</span>
          </div>
        </div>
        <div className="time-unit">
          <div>
            <span>{timeRemaining.hours}</span>
            <span> H</span>
          </div>
        </div>
        <div className="time-unit">
          <div>
            <span>{timeRemaining.minutes}</span>
            <span> M</span>
          </div>
        </div>
        <div className="time-unit">
          <div>
            <span>{timeRemaining.seconds}</span>
            <span> S</span>
          </div>
        </div>
        <div className="time-unit">
          <div>
            <span>{timeRemaining.milliseconds}</span>
            <span> MS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
import React, { useEffect, useState } from 'react';
import './ActivePage.css';

function ActivePage1() {

  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    function updateDateTime() {
      const now = new Date();
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const dayOfWeek = daysOfWeek[now.getDay()];
      const monthOfYear = monthsOfYear[now.getMonth()];
      const date = now.getDate();
      const year = now.getFullYear();
      const time = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
      setCurrentDateTime(`${dayOfWeek}, ${monthOfYear} ${date}, ${year}   ${time}`);
    }

    setInterval(() => {
      updateDateTime();
    }, 1000);
  }, []);

  return (
    <div className='clockdiv'>
        <div className="progress-clock__text">{currentDateTime}</div>
    </div>
  );
}

export default ActivePage1;

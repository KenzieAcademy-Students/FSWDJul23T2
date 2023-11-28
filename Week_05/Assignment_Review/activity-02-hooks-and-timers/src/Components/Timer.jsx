import { useEffect, useState } from "react";

const Timer = (props) => {
  const [time, setTime] = useState(5);

  // useEffect(() => {
  //   setTimeout(
  //     () => setTime((currTime) => (currTime > 0 ? currTime - 1 : currTime)),
  //     1000
  //   );
  // }, [time]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time === 0) clearInterval(interval);
      setTime((currTime) => (currTime > 0 ? currTime - 1 : currTime));
    }, 1000);
  }, []);

  return (
    <div className="timer">
      <h2>Timer: {time}</h2>
    </div>
  );
};

export default Timer;

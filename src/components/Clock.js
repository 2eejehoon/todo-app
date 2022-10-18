import { useState, useEffect } from "react";

export const Clock = () => {
  const [time, setTime] = useState();
  const getTime = () => {
    const date = new Date();
    setTime(date.toLocaleTimeString());
  };

  useEffect(() => {
    setInterval(getTime, 1000);
    return () => {
      setInterval(getTime, 1000);
    };
  }, []);
  return <section>{time}</section>;
};

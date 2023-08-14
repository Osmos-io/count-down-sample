import { useEffect, useMemo, useRef, useState } from "react";

const DAY_MS = 1000 * 60 * 60 * 24;
const HOUR_MS = 1000 * 60 * 60;
const MINUTE_MS = 1000 * 60;

const useCountdown = (target: Date) => {
  const [timeRemaining, setTimeRemaining] = useState(
    () => target.getTime() - Date.now(),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(target.getTime() - Date.now());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [target, setTimeRemaining]);

  const { days, hours, minutes, seconds } = useMemo(
    () => ({
      days: Math.floor(timeRemaining / DAY_MS),
      hours: Math.floor((timeRemaining % DAY_MS) / HOUR_MS),
      minutes: Math.floor((timeRemaining % HOUR_MS) / MINUTE_MS),
      seconds: Math.floor((timeRemaining % MINUTE_MS) / 1000),
    }),
    [timeRemaining],
  );

  return { days, hours, minutes, seconds };
};

export default useCountdown;

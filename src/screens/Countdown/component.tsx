import useCountdown from "@/hooks/useCountdown";
import classes from "./component.module.css";
import { useState } from "react";
import DatePartCard from "@/components/DatePartCard";
import DateTimeInput from "@/components/DateTimeInput";

const Countdown = () => {
  const [date, setDate] = useState(() => {
    const target = new Date();
    target.setDate(target.getDate() + 10);
    return target;
  });

  const { days, hours, minutes, seconds } = useCountdown(date);

  return (
    <div className={classes.root}>
      <div><DateTimeInput value={date} onChange={setDate} /></div>
      <div>
      <DatePartCard part="day" value={days} />
      <DatePartCard part="hour" value={hours} />
      <DatePartCard part="minute" value={minutes} />
      <DatePartCard part="second" value={seconds} />
      </div>
    </div>
  );
};

export default Countdown;

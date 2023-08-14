import { memo } from "react";
import classes from "./component.module.css";

type Part = "day" | "hour" | "minute" | "second";

interface Props {
  value: number;
  part: Part;
}

const Card = ({ value, part }: Props) => (
  <div className={classes.root} data-part={part}>
    {value}
  </div>
);

const DatePartCard = memo(Card);

export default DatePartCard;

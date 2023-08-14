import classes from "./component.module.css";

type Part = "day" | "hour" | "minute" | "second";

interface Props {
  value: number;
  part: Part;
}

const DatePartCard = ({ value, part }: Props) => (
  <div className={classes.root} data-part={part}>
    {value}
  </div>
);

export default DatePartCard;

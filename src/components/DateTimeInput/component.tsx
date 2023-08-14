import { ChangeEvent, memo, useCallback, useMemo } from "react";

interface Props {
  onChange: (value: Date) => void;
  value: Date;
}

const TODAY = new Date().toISOString().substring(0, 10);

const Input = ({ value, onChange }: Props) => {
  const handleChange = useCallback(
    (nextValue: ChangeEvent<HTMLInputElement>) => {
      const nextDate = new Date(nextValue.target.value);
      onChange(nextDate);
    },
    [onChange],
  );

  const derivedValue = useMemo(() => {
    const dt = new Date(value);
    dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
    return dt;
  }, [value]);

  return (
    <input
      type="datetime-local"
      name="meeting-time"
      onChange={handleChange}
      value={derivedValue.toISOString().substring(0, 16)}
      min={`${TODAY}T00:00`}
      step={60 * 15}
    />
  );
};

const DateTimeInput = memo(Input);

export default DateTimeInput;

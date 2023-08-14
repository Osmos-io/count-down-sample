import { ChangeEvent, memo, useCallback, useMemo } from "react";

const TODAY = new Date().toISOString().substring(0, 16);

interface Props {
  onChange: (value: Date) => void;
  value: Date;
}

const Input = ({ value, onChange }: Props) => {
  const handleChange = useCallback(
    (nextValue: ChangeEvent<HTMLInputElement>) => {
      const nextDate = new Date(nextValue.target.value);
      onChange(nextDate);
    },
    [onChange],
  );

  const inputValue = useMemo(() => {
    const dt = new Date(value);
    dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
    return dt.toISOString().substring(0, 16);
  }, [value]);

  return (
    <input
      type="datetime-local"
      name="meeting-time"
      onChange={handleChange}
      value={inputValue}
      min={`${TODAY}`}
      step={60 * 15}
    />
  );
};

const DateTimeInput = memo(Input);

export default DateTimeInput;

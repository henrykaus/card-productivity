import React, {ReactElement, useEffect, useRef} from 'react';
import './TimeInput.css';

export interface Time {
  hours: string | undefined;
  minutes: string | undefined;
}

export const emptyTime: Time = {
  hours: undefined,
  minutes: undefined,
}

interface TimeInputProps {
  time: Time;
  onChange: (type: "hours" | "minutes", value: string) => void;
}

const TimeInput = ({time, onChange}: TimeInputProps): ReactElement => {
  const minuteRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (time.hours && time.hours.length >= 2) {
      minuteRef.current?.focus();
    }
  }, [time.hours])

  return (
    <span className="TimeInput">
      <input
        value={time.hours}
        placeholder="HH"
        type="number"
        name="hours"
        className="TimeInput-input"
        onChange={(event) =>
          onChange("hours", event.target.value)
        }
      />
      :
      <input
        ref={minuteRef}
        value={time.minutes}
        placeholder="MM"
        type="number"
        name="minute"
        className="TimeInput-input"
        onChange={(event) =>
          onChange("minutes", event.target.value)
        }
      />
    </span>
  );
}

export default TimeInput;

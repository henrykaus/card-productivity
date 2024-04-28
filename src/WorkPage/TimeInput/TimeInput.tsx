import React, {ReactElement, useEffect, useRef} from 'react';
import './TimeInput.css';

export interface Time {
  hours: string;
  minutes: string;
}

export const emptyTime: Time = {
  hours: '',
  minutes: '',
}

interface TimeInputProps {
  time: Time;
  onChange: (type: "hours" | "minutes", value: string) => void;
}

const TimeInput = ({time, onChange}: TimeInputProps): ReactElement => {
  const hourRef = useRef<HTMLInputElement>(null);
  const minuteRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (time.hours && time.hours.length >= 2) {
      minuteRef.current?.focus();
    }
  }, [time.hours])

  const handleBackspacePress = (key: string, minuteValue: string) => {
    if (key === 'Backspace' && minuteValue.length === 0) {
      onChange("hours", time.hours.slice(0, time.hours.length));
      hourRef.current?.focus();
    }
  };

  return (
    <span className="TimeInput">
      <input
        ref={hourRef}
        value={time.hours}
        placeholder="HH"
        aria-label="Hours"
        type="number"
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
        aria-label="Minutes"
        type="number"
        className="TimeInput-input"
        onChange={(event) =>
          onChange("minutes", event.target.value)
        }
        onKeyDown={(event) =>
          handleBackspacePress(event.key, time.minutes)
        }
      />
    </span>
  );
}

export default TimeInput;

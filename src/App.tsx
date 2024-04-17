import React, {ReactElement, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

interface Time {
  hours: string | undefined;
  minutes: string | undefined;
}

const emptyTime: Time = {
  hours: undefined,
  minutes: undefined,
}

const App = (): ReactElement => {
  const [time, setTime] = useState<Time>(emptyTime);

  const validateAndSetTime = (type: "hours" | "minutes", timeString: string) => {
    const timeNumber = Number(timeString);
    if (isNaN(timeNumber)) {
      return;
    }
    switch (type) {
      case "hours": {
        if (!(timeNumber < 0) && !(timeNumber > 99)) {
          setTime({
            ...time,
            hours: timeString.slice(0, 2),
          })
        }
        break;
      }
      case "minutes": {
        if (!(timeNumber < 0) && !(timeNumber > 59)) {
          setTime({
            ...time,
            minutes: timeString.slice(0, 2),
          })
        }
        break;
      }
    }
  }

  return (
    <main className="App">
      <p className="App-header">
        I worked
        <input
          value={time.hours}
          placeholder="HH"
          type="text"
          name="hours"
          className="App-time-input"
          onChange={(event) =>
            validateAndSetTime("hours", event.target.value)
          }
        />
        :
        <input
          value={time.minutes}
          placeholder="MM"
          type="text"
          name="minute"
          className="App-time-input"
          onChange={(event) =>
            validateAndSetTime("minutes", event.target.value)
          }
        />
      </p>
      <button
        className="App-go-button"
        disabled={Number(time.minutes) <= 0 && Number(time.hours) <= 0}
        onClick={() => console.log(time)}
      >
        <FontAwesomeIcon icon={faArrowRight}/>
      </button>
    </main>
  );
}

export default App;

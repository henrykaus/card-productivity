import React, {ReactElement, useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {createContext} from "react";
import GoldButton from "./GoldButton/GoldButton";
import TimeInput, {emptyTime, Time} from "./TimeInput/TimeInput";

const GoldContext = createContext(0);

const App = (): ReactElement => {
  const [time, setTime] = useState<Time>(emptyTime);
  const [goldCount, setGoldCount] = useState(0);

  const validateAndSetTime = (type: "hours" | "minutes", timeString: string) => {
    const filteredTimeString = timeString
      .replaceAll('-', '')
      .replaceAll('.', '')
      .replaceAll('+', '')
      .slice(0, 2);
    const timeNumber = Number(filteredTimeString);

    if (isNaN(timeNumber)) {
      return;
    }
    switch (type) {
      case "hours": {
        if (!(timeNumber < 0) && !(timeNumber > 99)) {
          setTime({
            ...time,
            hours: filteredTimeString,
          })
        }
        break;
      }
      case "minutes": {
        if (!(timeNumber < 0) && !(timeNumber > 59)) {
          setTime({
            ...time,
            minutes: filteredTimeString,
          })
        }
        break;
      }
    }
  }

  const changeGoldCount = () => {
    const hours = Number(time.hours);
    const minutes = Number(time.minutes);
    let goldToAdd = 0;
    if (!isNaN(hours)) {
      goldToAdd += hours * 60;
    }
    if (!isNaN(minutes)) {
      goldToAdd += minutes;
    }
    setGoldCount(goldCount + goldToAdd);
  }

  return (
    <GoldContext.Provider value={goldCount}>
      <main className="App">
        <p className="App-header">
          I worked
          <TimeInput time={time} onChange={validateAndSetTime} />
        </p>
        <button
          className="App-go-button"
          disabled={!(Number(time.hours) > 0) && !(Number(time.minutes) > 0)}
          onClick={changeGoldCount}
        >
          <FontAwesomeIcon icon={faArrowRight}/>
        </button>
        <GoldButton>
          {goldCount}
        </GoldButton>
      </main>
    </GoldContext.Provider>
  );
}

export default App;

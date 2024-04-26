import React, {ReactElement, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './WorkPage.css';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import TimeInput, {emptyTime, Time} from "./TimeInput/TimeInput";
import {storeTime} from "./workPageUtils";

export interface PageProps {
  updateGoldValue: (gold: number) => void;
}

const WorkPage = (props: PageProps): ReactElement => {
  const {updateGoldValue} = props;

  const [time, setTime] = useState<Time>(emptyTime);

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
        if (timeNumber > 59) {
          setTime({
            ...time,
            minutes: '59',
          })
        }
        else if (timeNumber >= 0) {
          setTime({
            ...time,
            minutes: filteredTimeString,
          })
        }
        break;
      }
    }
  }

  const changeGoldCount = (event: any) => {
    event.preventDefault();

    const hours = Number(time.hours);
    const minutes = Number(time.minutes);

    let timeInMinutes = 0;
    if (!isNaN(hours)) {
      timeInMinutes += hours * 60;
    }
    if (!isNaN(minutes)) {
      timeInMinutes += minutes;
    }
    storeTime(timeInMinutes);
    updateGoldValue(timeInMinutes);
    setTime(emptyTime);
  }

  return (
    <form className="WorkPage-form" onSubmit={(event) =>
      changeGoldCount(event)
    }>
      <p className="WorkPage-header">
       I worked
        <TimeInput time={time} onChange={validateAndSetTime} />
      </p>
      <button
        className="WorkPage-go-button"
        disabled={!(Number(time.hours) > 0) && !(Number(time.minutes) > 0)}
        type="submit"
        aria-label='Add time'
      >
        <FontAwesomeIcon icon={faArrowRight}/>
      </button>
    </form>
  );
}

export default WorkPage;

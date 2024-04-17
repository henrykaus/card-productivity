import React, {ReactElement, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './WorkPage.css';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import TimeInput, {emptyTime, Time} from "../TimeInput/TimeInput";

interface WorkPageProps {
  updateGoldValue: (gold: number) => void;
}

const WorkPage = (props: WorkPageProps): ReactElement => {
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

  const changeGoldCount = (event: any) => {
    event.preventDefault();
    const hours = Number(time.hours);
    const minutes = Number(time.minutes);
    let goldToAdd = 0;
    if (!isNaN(hours)) {
      goldToAdd += hours * 60;
    }
    if (!isNaN(minutes)) {
      goldToAdd += minutes;
    }
    updateGoldValue(goldToAdd);
  }

  return (
    <form className="WorkPage-form" onSubmit={(event) => changeGoldCount(event)}>
      <p className="WorkPage-header">
        I worked
        <TimeInput time={time} onChange={validateAndSetTime} />
      </p>
      <button
        className="WorkPage-go-button"
        disabled={!(Number(time.hours) > 0) && !(Number(time.minutes) > 0)}
        type="submit"
      >
        <FontAwesomeIcon icon={faArrowRight}/>
      </button>
    </form>
  );
}

export default WorkPage;

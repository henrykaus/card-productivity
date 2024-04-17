import React, {ReactElement} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './GoldButton.css';
import {faCoins} from "@fortawesome/free-solid-svg-icons";

interface GoldButtonProps {
  children: number;
}

const GoldButton = ({children}: GoldButtonProps): ReactElement => {
  return (
    <button className="GoldButton">
      <FontAwesomeIcon icon={faCoins} />
      {children}
    </button>
  );
}

export default GoldButton;

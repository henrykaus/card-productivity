import React, {ReactElement} from 'react';
import './NavBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faStore} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-regular-svg-icons";

export enum Pages {
  Work,
  Shop,
  Inventory,
}

interface NavBarProps {
  setPage: (page: Pages) => void;
}

const NavBar = ({setPage}: NavBarProps): ReactElement => {
  return (
    <nav className="NavBar">
      <ul className="NavBar-list">
        <li>
          <button onClick={() => setPage(Pages.Work)}>
            <FontAwesomeIcon icon={faClock} />
          </button>
        </li>
        <li>
          <button onClick={() => setPage(Pages.Shop)}>
            <FontAwesomeIcon icon={faStore} />
          </button>
        </li>
        <li>
          <button onClick={() => setPage(Pages.Inventory)}>
            <FontAwesomeIcon icon={faBriefcase} />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

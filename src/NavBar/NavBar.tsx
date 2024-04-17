import React, {ReactElement} from 'react';
import './NavBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faStore} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-regular-svg-icons";

export enum Page {
  Work,
  Shop,
  Inventory,
}

interface NavBarProps {
  activePage: Page;
  setPage: (page: Page) => void;
}

const NavBar = ({activePage, setPage}: NavBarProps): ReactElement => {
  return (
    <nav className="NavBar">
      <ul className="NavBar-list">
        <li>
          <button
            onClick={() => setPage(Page.Work)}
            className={`${activePage === Page.Work && 'NavBar-active'}`}
          >
            <FontAwesomeIcon icon={faClock} />
          </button>
        </li>
        <li>
          <button
            onClick={() => setPage(Page.Shop)}
            className={`${activePage === Page.Shop && 'NavBar-active'}`}
          >
            <FontAwesomeIcon icon={faStore} />
          </button>
        </li>
        <li>
          <button
            onClick={() => setPage(Page.Inventory)}
            className={`${activePage === Page.Inventory && 'NavBar-active'}`}
          >
            <FontAwesomeIcon icon={faBriefcase} />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

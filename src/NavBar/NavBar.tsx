import React, {ReactElement} from 'react';
import './NavBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faChartSimple, faStore} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames";

export enum Page {
  Work,
  Shop,
  Inventory,
  Stats,
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
            className={classNames({'NavBar-active': activePage === Page.Work})}
            aria-label='Work Page'
          >
            <FontAwesomeIcon icon={faClock} />
          </button>
        </li>
        <li>
          <button
            onClick={() => setPage(Page.Shop)}
            className={classNames({'NavBar-active': activePage === Page.Shop})}
            aria-label='Shop Page'
          >
            <FontAwesomeIcon icon={faStore} />
          </button>
        </li>
        <li>
          <button
            onClick={() => setPage(Page.Inventory)}
            className={classNames({'NavBar-active': activePage === Page.Inventory})}
            aria-label='Inventory Page'
          >
            <FontAwesomeIcon icon={faBriefcase} />
          </button>
        </li>
        <li>
          <button
            onClick={() => setPage(Page.Stats)}
            className={classNames({'NavBar-active': activePage === Page.Stats})}
            aria-label='Statistics Page'
          >
            <FontAwesomeIcon icon={faChartSimple} />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

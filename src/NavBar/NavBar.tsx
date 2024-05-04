import React, {ReactElement, useEffect, useRef, useState} from 'react';
import './NavBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faChartSimple, faGears, faStore} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames";
import SettingsDropdown from "../SettingsDropdown/SettingsDropdown";

export enum Page {
  Work,
  Shop,
  Inventory,
  Stats,
  Settings,
}

interface NavBarProps {
  activePage: Page;
  setPage: (page: Page) => void;
}

const NavBar = ({activePage, setPage}: NavBarProps): ReactElement => {
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSettingsDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="NavBar">
      <ul className="NavBar-list">
        <li>
          <button
            onClick={() => setPage(Page.Work)}
            className={classNames({'NavBar-list-button': true, 'NavBar-active': activePage === Page.Work})}
            aria-label='Work Page'
          >
            <FontAwesomeIcon icon={faClock}/>
          </button>
        </li>
        <li>
          <button
            onClick={() => setPage(Page.Shop)}
            className={classNames({'NavBar-list-button': true, 'NavBar-active': activePage === Page.Shop})}
            aria-label='Shop Page'
          >
            <FontAwesomeIcon icon={faStore}/>
          </button>
        </li>
        <li>
          <button
            onClick={() => setPage(Page.Inventory)}
            className={classNames({'NavBar-list-button': true, 'NavBar-active': activePage === Page.Inventory})}
            aria-label='Inventory Page'
          >
            <FontAwesomeIcon icon={faBriefcase}/>
          </button>
        </li>
        <li>
          <button
            onClick={() => setPage(Page.Stats)}
            className={classNames({'NavBar-list-button': true, 'NavBar-active': activePage === Page.Stats})}
            aria-label='Statistics Page'
          >
            <FontAwesomeIcon icon={faChartSimple}/>
          </button>
        </li>
        <li ref={dropdownRef}>
          <button
            onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}
            className={classNames({'NavBar-list-button': true})}
            aria-label='Settings'
          >
            <FontAwesomeIcon icon={faGears}/>
          </button>
          {showSettingsDropdown && (
            <SettingsDropdown />
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

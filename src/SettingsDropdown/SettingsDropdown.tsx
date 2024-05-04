import React, {ReactElement} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SettingsDropdown.css';
import {faDownload, faFileImport} from "@fortawesome/free-solid-svg-icons";
import {downloadStoredData, importStoredData} from "./settingsDropdownUtils";

const SettingsDropdown = (): ReactElement => {

  const handleDownload = () => {
    downloadStoredData();
  }

  const handleImport = (event: any) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (fileReader.result) {
        importStoredData(fileReader.result.toString());
      }
    }

    fileReader.readAsText(file);
  }

  return (
    <ul className='SettingsDropdown'>
      <li>
        <button className='SettingsDropdown-button' onClick={handleDownload}>
          <FontAwesomeIcon icon={faDownload}/>
          <span className='SettingsDropdown-text'>Download Data</span>
        </button>
      </li>
      <li>
        <label htmlFor='import-input' className='SettingsDropdown-button'>
          <FontAwesomeIcon icon={faFileImport}/>
          <span className='SettingsDropdown-text'>Import Data</span>
        </label>
        <input id='import-input' type='file' className='SettingsDropdown-file-input' onChange={handleImport} />
      </li>
    </ul>
  );
}

export default SettingsDropdown;

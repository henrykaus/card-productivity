import React, {ReactElement, useState} from 'react';
import './Main.css';
import {createContext} from "react";
import GoldButton from "../GoldButton/GoldButton";
import WorkPage from "../WorkPage/WorkPage";
import NavBar, {Pages} from "../NavBar/NavBar";

export const GoldContext = createContext(0);

// interface MainProps {
// }

const Main = (): ReactElement => {
  const [goldCount, setGoldCount] = useState(0);
  const [page, setPage] = useState<Pages>(Pages.Work);

  return (
    <GoldContext.Provider value={goldCount}>
      <div className="Site-container">
        <main className="Main">
          {page === Pages.Work && (
            <WorkPage
              updateGoldValue={(goldToAdd) => setGoldCount(goldCount + goldToAdd)}
            />
          )}
        </main>
        <NavBar setPage={setPage}/>
        <GoldButton onClick={() => setPage(Pages.Shop)}>
          {goldCount}
        </GoldButton>
      </div>
    </GoldContext.Provider>
  );
}

export default Main;

import React, {ReactElement, useEffect, useState} from 'react';
import './Main.css';
import {createContext} from "react";
import GoldButton from "../GoldButton/GoldButton";
import WorkPage from "../WorkPage/WorkPage";
import NavBar, {Page} from "../NavBar/NavBar";
import ShopPage from "../ShopPage/ShopPage";
import InventoryPage from "../InventoryPage/InventoryPage";

export const GoldContext = createContext(0);

const Main = (): ReactElement => {
  const [goldCount, setGoldCount] = useState(0);
  const [page, setPage] = useState<Page>(Page.Work);

  useEffect(() => {
    const totalGold = localStorage.getItem("gold");
    setGoldCount(Number(totalGold));
  }, [])

  const updateGoldValue = (goldToAdd: number) => {
    const totalGold = goldCount + goldToAdd;
    localStorage.setItem("gold", totalGold.toString());
    setGoldCount(totalGold);
  }

  return (
    <GoldContext.Provider value={goldCount}>
      <div className="Site-container">
        <main className="Main">
          {page === Page.Work && (
            <WorkPage
              updateGoldValue={updateGoldValue}
            />
          )}
          {page === Page.Shop && (
            <ShopPage
              updateGoldValue={updateGoldValue}
            />
          )}
          {page === Page.Inventory && (
            <InventoryPage />
          )}
        </main>
        <NavBar activePage={page} setPage={setPage}/>
        <GoldButton onClick={() => setPage(Page.Shop)}>
          {goldCount}
        </GoldButton>
      </div>
    </GoldContext.Provider>
  );
}

export default Main;

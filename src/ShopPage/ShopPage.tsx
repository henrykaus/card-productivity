import React, {ReactElement, useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ShopPage.css';
import CardPack from "./CardPack/CardPack";
import {PageProps} from "../WorkPage/WorkPage";

const ShopPage = ({updateGoldValue}: PageProps): ReactElement => {
  const handlePurchase = (price: number) => {
    updateGoldValue(-price);
  }

  return (
    <article className="ShopPage">
      <CardPack price={50} onPurchase={handlePurchase} />
    </article>
  );
}

export default ShopPage;

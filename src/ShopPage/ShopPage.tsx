import React, {ReactElement, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ShopPage.css';
import CardPack from "./CardPack/CardPack";
import {PageProps} from "../WorkPage/WorkPage";
import RewardsModal from "./RewardsModal/RewardsModal";

const ShopPage = ({updateGoldValue}: PageProps): ReactElement => {
  const [rewardsModalIsOpen, setRewardsModalIsOpen] = useState(false);

  const handlePurchase = (price: number) => {
    updateGoldValue(-price);
    // Display rewards
    setRewardsModalIsOpen(true);
  }

  return (
    <article className="ShopPage">
      <CardPack price={50} onPurchase={handlePurchase} />
      <RewardsModal isOpen={rewardsModalIsOpen} onClose={() => setRewardsModalIsOpen(false)} />
    </article>
  );
}

export default ShopPage;

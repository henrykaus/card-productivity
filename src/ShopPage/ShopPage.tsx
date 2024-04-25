import React, {ReactElement, useState} from 'react';
import './ShopPage.css';
import CardPack from "./CardPack/CardPack";
import {PageProps} from "../WorkPage/WorkPage";
import RewardsModal from "./RewardsModal/RewardsModal";
import {Item} from "../items";
import {pickRewards, updateInventory} from "./shopPageUtils";
import {Pack, PACKS} from "../packs";

const ShopPage = ({updateGoldValue}: PageProps): ReactElement => {
  const [rewardsModalIsOpen, setRewardsModalIsOpen] = useState(false);
  const [rewards, setRewards] = useState<Item[]>([]);

  const handlePurchase = (pack: Pack) => {
    updateGoldValue(-pack.cost);
    const rewards = pickRewards(3, pack.items);
    updateInventory(rewards);
    setRewards(rewards);
    setRewardsModalIsOpen(true);
  }

  return (
    <>
      <article className="ShopPage">
        <div className="ShopPage-slider">
          {PACKS.map((pack, index) => (
            <CardPack key={index} pack={pack} onPurchase={handlePurchase}/>
          ))}
        </div>
      </article>
      {rewardsModalIsOpen && (
        <RewardsModal
          rewards={rewards}
          onClose={() => setRewardsModalIsOpen(false)}
        />
      )}
    </>
  );
}

export default ShopPage;

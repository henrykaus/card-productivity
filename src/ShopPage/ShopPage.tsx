import React, {ReactElement, useState} from 'react';
import './ShopPage.css';
import CardPack from "./CardPack/CardPack";
import {PageProps} from "../WorkPage/WorkPage";
import RewardsModal from "./RewardsModal/RewardsModal";
import {items, Item} from "../items";
import {updateInventory} from "./shopPageUtils";

const ShopPage = ({updateGoldValue}: PageProps): ReactElement => {
  const [rewardsModalIsOpen, setRewardsModalIsOpen] = useState(false);
  const [rewards, setRewards] = useState<Item[]>([]);

  const pickRewards = (numRewards: number) => {
    const range = items.reduce((acc, item) => acc + item.weight, 0);

    let rewards: Item[] = [];
    for (let i = 0; i < numRewards; i++) {
      const randomNumber = Math.random() * range;
      items.reduce((currWeightTotal, item) => {
        if (randomNumber > currWeightTotal && randomNumber <= currWeightTotal + item.weight) {
          rewards.push(item);
        }
        return currWeightTotal + item.weight;
      }, 0);
    }

    return rewards;
  }

  const handlePurchase = (price: number) => {
    updateGoldValue(-price);
    const rewards = pickRewards(3);
    updateInventory(rewards);
    setRewards(rewards);
    setRewardsModalIsOpen(true);
  }

  return (
    <article className="ShopPage">
      <CardPack price={60} onPurchase={handlePurchase} />
      <RewardsModal
        rewards={rewards}
        isOpen={rewardsModalIsOpen}
        onClose={() => setRewardsModalIsOpen(false)}
      />
    </article>
  );
}

export default ShopPage;

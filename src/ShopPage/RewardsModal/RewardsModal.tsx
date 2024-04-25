import React, {ReactElement} from 'react';
import './RewardsModal.css';
import Shard from "./Shard";
import {Item} from "../../items";

interface RewardsModalProps {
  isOpen: boolean;
  onClose: () => void;
  rewards: Item[];
}

const RewardsModal = (props: RewardsModalProps): ReactElement => {
  const {isOpen, onClose, rewards} = props;

  return isOpen ? (
    <main className="RewardsModal">
      <ul className="RewardsModal-list">
        {rewards.map((reward, index) =>
          <Shard
            key={index}
            itemName={reward.name}
            image={reward.image}
          />
        )}
      </ul>
      <button
        className="RewardsModal-claim"
        onClick={onClose}
      >
        Claim Rewards
      </button>
    </main>
  ) : <></>;
}

export default RewardsModal;

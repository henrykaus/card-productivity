import React, {ReactElement} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './RewardsModal.css';
import Shard from "./Shard";

interface RewardsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RewardsModal = (props: RewardsModalProps): ReactElement => {
  const {isOpen, onClose} = props;

  return isOpen ? (
    <main className="RewardsModal">
      <ul className="RewardsModal-list">
        <Shard itemName='AirPods' image='airpods-1.png' />
        <Shard itemName='AirPods' image='airpods-1.png' />
        <Shard itemName='AirPods' image='airpods-1.png' />
      </ul>
      <button className="RewardsModal-claim" onClick={onClose}>Claim Rewards</button>
    </main>
  ) : <></>;
}

export default RewardsModal;

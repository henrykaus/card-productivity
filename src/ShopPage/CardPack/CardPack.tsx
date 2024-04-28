import React, {ReactElement, useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CardPack.css';
import {faCoins} from "@fortawesome/free-solid-svg-icons";
import {GoldContext} from "../../Main/Main";
import {Pack} from "../../packs";

interface CardPackProps {
  pack: Pack;
  onPurchase: (pack: Pack) => void;
}

const CardPack = (props: CardPackProps): ReactElement => {
  const {pack, onPurchase} = props;

  const gold = useContext(GoldContext);

  return (
    <button
      className='CardPack'
      onClick={() => onPurchase(pack)}
      disabled={pack.cost > gold}
      aria-label={`Purchase and open ${pack.name} pack`}
    >
      <img
        src={require(`../../img/${pack.image}`)}
        height={300}
        width={200}
        alt={`${pack.name} pack`}
        className='CardPack-image'
      />
      <p className="CardPack-cost">
        <FontAwesomeIcon icon={faCoins} className='CardPack-cost-icon' />
        {pack.cost}
      </p>
    </button>
  );
}

export default CardPack;

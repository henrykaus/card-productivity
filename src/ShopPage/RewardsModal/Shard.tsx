import React, {ReactElement} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Shard.css';
import {faBolt, faGift} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";

export interface ShardProps {
  itemName: string;
  image: string;
  onClick?: () => void;
  info?: ReactElement;
  color?: 'purple' | 'green'
  icon?: 'bolt' | 'gift'
}

const Shard = (props: ShardProps): ReactElement => {
  const {
    itemName,
    image,
    onClick,
    info,
    color = "purple",
    icon = 'bolt'
  } = props;

  const item = icon === 'bolt' ?
    faBolt : faGift;

  return (
    <section className={`Shard ${colorVariantClasses[color]}`}>
      <button
        className='Shard-image-container'
        disabled={!onClick}
        onClick={onClick}
      >
        <img src={require(`../../img/${image}`)} alt={itemName} height={300} width={200} className='Shard-image' />
        <span className='Shard-info'>
          {info}
          <FontAwesomeIcon icon={item} className='Shard-icon'/>
        </span>
      </button>
      <p className='Shard-text'>{itemName} Shard</p>
    </section>
  );
}

const colorVariantClasses = {
  'purple': 'Shard--purple',
  'green': 'Shard--green'
}

export default Shard;

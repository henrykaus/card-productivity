import React, {ReactElement} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Shard.css';
import {faBolt, faGift} from "@fortawesome/free-solid-svg-icons";

export interface ShardProps {
  itemName: string;
  image: string;
  onClick?: () => void;
  info?: ReactElement;
  color?: 'purple' | 'green';
  glow?: boolean;
  icon?: 'bolt' | 'gift';
  type?: string;
  className?: string;
  hasInfo?: boolean;
}

const Shard = (props: ShardProps): ReactElement => {
  const {
    itemName,
    image,
    onClick,
    info,
    color = "purple",
    glow = false,
    icon = 'bolt',
    type = 'Shard',
    hasInfo = true,
    className
  } = props;

  const item = icon === 'bolt' ?
    faBolt : faGift;

  return (
    <section className={`Shard ${colorVariantClasses[color]} ${glow ? 'Shard--glow' : ''} ${className}`}>
      <button
        className='Shard-image-container'
        disabled={!onClick}
        onClick={onClick}
      >
        <img src={require(`../img/${image}`)} alt={itemName} height={300} width={200} className='Shard-image' />
        {hasInfo && (
          <span className='Shard-info'>
            {info}
            <FontAwesomeIcon icon={item} className='Shard-icon'/>
          </span>
        )}
      </button>
      <p className='Shard-text'>{itemName} {type}</p>
    </section>
  );
}

const colorVariantClasses = {
  'purple': 'Shard--purple',
  'green': 'Shard--green'
}

export default Shard;

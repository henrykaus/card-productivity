import React, {ReactElement} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from "classnames";
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
  ariaLabel?: string;
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
    ariaLabel,
    className
  } = props;

  const item = icon === 'bolt' ?
    faBolt : faGift;

  const shardClasses = classNames({
    'Shard': true,
    [colorVariantClasses[color]]: true,
    'Shard--glow': glow,
    [className ?? '']: className,
  });

  return (
    <section className={shardClasses}>
      <button
        className='Shard-image-container'
        disabled={!onClick}
        aria-label={ariaLabel}
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
      {itemName && (
        <p className='Shard-text'>{itemName} {type}</p>
      )}
    </section>
  );
}

const colorVariantClasses = {
  'purple': 'Shard--purple',
  'green': 'Shard--green'
}

export default Shard;

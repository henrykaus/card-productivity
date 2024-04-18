import React, {ReactElement} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Shard.css';
import {faBolt} from "@fortawesome/free-solid-svg-icons";

interface ShardProps {
  itemName: string;
  image: string;
}

const Shard = (props: ShardProps): ReactElement => {
  const {itemName, image} = props;

  return (
    <section className='Shard'>
      <div className='Shard-image-container'>
        <img src={require(`../../img/${image}`)} alt={itemName} height={300} width={200} className='Shard-image' />
        <span className='Shard-icon-container'>
          <FontAwesomeIcon icon={faBolt} className='Shard-icon'/>
        </span>
      </div>
      <p className='Shard-text'>{itemName} Shard</p>
    </section>
  );
}

export default Shard;

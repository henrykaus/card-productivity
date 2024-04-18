import React, {ReactElement} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Shard.css';

interface ShardProps {
  itemName: string;
  image: string;
}

const Shard = (props: ShardProps): ReactElement => {
  const {itemName, image} = props;

  return (
    <section className='Shard'>
      <img src={require(`../../img/${image}`)} alt={itemName} height={300} width={200} className='Shard-image' />
      <p className='Shard-text'>{itemName} Shard</p>
    </section>
  );
}

export default Shard;

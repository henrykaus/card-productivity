import React, {ReactElement, useState} from 'react';
import './FlippableShard.css';
import Shard from "../../Shard/Shard";
import classNames from "classnames";

interface FlippableShardProps {
  itemName: string;
  image: string;
  cardBackImage: string;
  onFlip: () => void;
}

const FlippableShard = (props: FlippableShardProps): ReactElement => {
  const {itemName, image, cardBackImage, onFlip} = props;

  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    onFlip();
    setFlipped(!flipped)
  }

  return (
    <div className='FlippableShard'>
      <Shard
        itemName={itemName}
        image={image}
        className={classNames('FlippableShard-front', {'FlippableShard-front--flipped': flipped})}
        onClick={handleFlip}
        ariaLabel='Flip card to back'
      />
      <Shard
        itemName=''
        image={cardBackImage}
        hasInfo={false}
        className={classNames('FlippableShard-back', {'FlippableShard-back--flipped': flipped})}
        onClick={handleFlip}
        ariaLabel='Flip card to front'
      />
    </div>
  );
};

export default FlippableShard;

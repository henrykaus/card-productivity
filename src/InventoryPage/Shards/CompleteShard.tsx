import React, {ReactElement} from 'react';
import './CompleteShard.css';
import Shard, {ShardProps} from "../../Shard/Shard";

interface CompleteShardProps extends ShardProps {
  numComplete: number;
  onRemove: () => void;
}

const CompleteShard = (props: CompleteShardProps): ReactElement => {
  const {itemName, image, numComplete, onRemove} = props;

  return (
    <Shard
      onClick={onRemove}
      itemName={itemName}
      image={image}
      color='green'
      glow={true}
      icon='gift'
      type='Reward'
      className='CompleteShard'
      info={(
        <p className='CompleteShard-info'>
          x
          <span className='CompleteShard-number'>{numComplete}</span>
        </p>
      )}
    />
  );
}

export default CompleteShard;

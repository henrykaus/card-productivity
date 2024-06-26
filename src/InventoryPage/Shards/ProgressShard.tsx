import React, {ReactElement} from 'react';
import './ProgressShard.css';
import Shard, {ShardProps} from "../../Shard/Shard";

interface ProgressShardProps extends ShardProps {
  numShards: number;
  count: number;
}

const ProgressShard = (props: ProgressShardProps): ReactElement => {
  const {itemName, image, numShards, count} = props;

  return (
    <Shard
      itemName={itemName}
      image={image}
      className='ProgressShard'
      info={(
        <p className='ProgressShard-info'>
          <span className='ProgressShard-count'>{count}</span>
          <span className='ProgressShard-number'>/{numShards}</span>
        </p>
      )}
    />
  );
}

export default ProgressShard;

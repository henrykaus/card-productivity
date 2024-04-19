import React, {ReactElement, useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InventoryPage.css';
import ProgressShard from "./Shards/ProgressShard";
import {getInventory, InventoryItem, removeItemFromInventory} from "./inventoryPageUtils";
import CompleteShard from "./Shards/CompleteShard";

const InventoryPage = (): ReactElement => {
  const [inventory, setInventory] = useState<InventoryItem[]>([])

  useEffect(() => {
    const inventory = getInventory();
    setInventory(inventory);
  }, []);

  return (
    <article className="InventoryPage">
      <div className="InventoryPage-slider">
        {inventory.map((inventoryItem, index) =>
          inventoryItem.numComplete ? (
            <CompleteShard
              key={index}
              onRemove={() => {
                const updatedInventory = removeItemFromInventory(inventoryItem);
                setInventory(updatedInventory);
              }}
              numComplete={inventoryItem.numComplete}
              itemName={inventoryItem.name}
              image={inventoryItem.image}
            />
          ) : (
            <ProgressShard
              key={index}
              itemName={inventoryItem.name}
              image={inventoryItem.image}
              numShards={inventoryItem.numShards}
              count={inventoryItem.count}
            />
          )
        )}
      </div>
    </article>
  );
}

export default InventoryPage;

import React, {ReactElement, useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InventoryPage.css';
import {Item, items} from "../items";
import Shard from "../ShopPage/RewardsModal/Shard";

interface InventoryItem extends Item {
  count: number;
}

const InventoryPage = (): ReactElement => {
  const [inventory, setInventory] = useState<InventoryItem[]>([])

  useEffect(() => {
    const storageInventory = localStorage.getItem("inventory");

    if (storageInventory) {
      const inventoryValues = JSON.parse(storageInventory);
      const itemNames = Object.keys(inventoryValues);
      let inventory: InventoryItem[] = [];
      itemNames.forEach((itemName) => {
        const item = items.find((item) => item.name === itemName);
        if (item) {
          inventory.push({
            ...item,
            count: inventoryValues[itemName],
          })
        }
      });

      setInventory(inventory);
    }
  }, []);

  return (
    <article className="InventoryPage">
      <div className="InventoryPage-slider">
        {inventory.map((inventoryItem) => (
          <Shard
            itemName={inventoryItem.name}
            image={inventoryItem.image}
            numShards={inventoryItem.numShards}
            count={inventoryItem.count}
          />
        ))}
      </div>
    </article>
  );
}

export default InventoryPage;

import {Item, ITEMS} from "../items";

export interface InventoryItem extends Item {
  count: number;
  numComplete?: number;
}

export const getInventory = (): InventoryItem[] => {
  const storageInventory = localStorage.getItem("inventory");

  if (storageInventory) {
    const inventoryValues = JSON.parse(storageInventory);
    const itemNames = Object.keys(inventoryValues);
    let inventory: InventoryItem[] = [];
    itemNames.forEach((itemName) => {
      const item = ITEMS.find((item) => item.name === itemName);
      if (item) {
        inventory.push(...createInventoryItems(inventoryValues[itemName], item));
      }
    });

    return inventory;
  } else {
    return [];
  }
}

export const createInventoryItems = (inventoryItemCount: number, item: Item) => {
  const itemCount = inventoryItemCount % item.numShards;
  const numComplete = (inventoryItemCount - itemCount) / item.numShards;

  const inventoryItems: InventoryItem[] = [];
  if (numComplete) {
    inventoryItems.push({
      ...item,
      count: inventoryItemCount - itemCount,
      numComplete: numComplete,
    })
  }
  if (itemCount) {
    inventoryItems.push({
      ...item,
      count: itemCount,
    })
  }
  return inventoryItems;
}

export const removeItemFromInventory = (item: Item) => {
  const storageInventory = localStorage.getItem("inventory");

  if (storageInventory) {
    const inventoryValues = JSON.parse(storageInventory);
    const itemNames = Object.keys(inventoryValues);
    const inventoryItem = itemNames.find((name) => name === item.name);
    if (inventoryItem) {
      inventoryValues[item.name] = Math.max(0, inventoryValues[item.name] - item.numShards);
      if (inventoryValues[item.name] === 0) {
        delete inventoryValues[item.name];
      }
      localStorage.setItem("inventory", JSON.stringify(inventoryValues))
    }
  }

  return getInventory();
}

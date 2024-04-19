import {Item} from "../items";

export const updateInventory = (rewards: Item[]) => {
  const inventory = localStorage.getItem("inventory");
  const inventoryObj: Object = inventory ? JSON.parse(inventory) : {};
  const inventoryMap = new Map(Object.entries(inventoryObj));

  const updatedInventoryMap = rewards.reduce((acc, item) => {
    const currVal = acc.get(item.name);
    if (currVal) {
      acc.set(item.name, currVal + 1);
    } else {
      acc.set(item.name, 1);
    }
    return acc;
  }, inventoryMap);

  const updatedInventory = Object.fromEntries(updatedInventoryMap.entries());
  localStorage.setItem("inventory", JSON.stringify(updatedInventory));
}

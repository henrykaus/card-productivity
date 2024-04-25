import {Item, ITEMS} from "../items";

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

export const pickRewards = (numRewards: number, items: string[]) => {
  const itemsMap = ITEMS.reduce((acc, item) => acc.set(item.name, item),
    new Map<string, Item>());

  const packItems: Item[] = [];
  items.reduce((acc, item) => {
    const currItem = itemsMap.get(item);
    if (currItem) {
      acc.push(currItem);
    }
    return acc;
  }, packItems);

  const range = packItems.reduce((acc, item) => acc + item.weight, 0);

  let rewards: Item[] = [];
  for (let i = 0; i < numRewards; i++) {
    const randomNumber = Math.random() * range;
    packItems.reduce((currWeightTotal, item) => {
      if (randomNumber > currWeightTotal && randomNumber <= currWeightTotal + item.weight) {
        rewards.push(item);
      }
      return currWeightTotal + item.weight;
    }, 0);
  }

  return rewards;
}

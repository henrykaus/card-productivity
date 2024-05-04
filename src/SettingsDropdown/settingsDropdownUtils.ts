import {formatDate} from "../StatsPage/statsPageUtils";

export const downloadStoredData = () => {
  const storedGoldString = localStorage.getItem("gold");
  const storedTimeStatsString = localStorage.getItem("time-stats");
  const storedInventoryString = localStorage.getItem("inventory");

  const todaysDate = formatDate(new Date());

  const json = {
    ...(storedGoldString && {gold: JSON.parse(storedGoldString)}),
    ...(storedTimeStatsString && {timeStats: JSON.parse(storedTimeStatsString)}),
    ...(storedInventoryString && {inventory: JSON.parse(storedInventoryString)}),
  }

  const data = JSON.stringify(json);
  const blob = new Blob([data], { type: "application/json" });
  const jsonObjectUrl = URL.createObjectURL(blob);

  const filename = `card-data-${todaysDate}.json`;
  const anchor = document.createElement("a");
  anchor.href = jsonObjectUrl;
  anchor.download = filename;

  anchor.click();

  URL.revokeObjectURL(jsonObjectUrl);
}

export const importStoredData = (fileData: string) => {
  try {
    const data = JSON.parse(fileData);

    if (data.gold) {
      localStorage.setItem("gold", JSON.stringify(data.gold));
    } else {
      localStorage.removeItem("gold");
    }
    if (data.timeStats) {
      localStorage.setItem("time-stats", JSON.stringify(data.timeStats));
    } else {
      localStorage.removeItem("time-stats");
    }
    if (data.inventory) {
      localStorage.setItem("inventory", JSON.stringify(data.inventory));
    } else {
      localStorage.removeItem("inventory");
    }
    window.location.reload();
  } catch (err) {
    console.error("Invalid Data:", err);
    return;
  }
}

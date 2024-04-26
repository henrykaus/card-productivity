
export const storeTime = (time: number) => {
  const storedTimeStatsString = localStorage.getItem("time-stats");
  const todaysDate = new Date().toISOString().split('T')[0].replaceAll('-', '');

  if (!storedTimeStatsString) {
    localStorage.setItem("time-stats", JSON.stringify({[todaysDate]: time}));
  } else {
    const storedTimeStats = JSON.parse(storedTimeStatsString);
    if (storedTimeStats[todaysDate]) {
      storedTimeStats[todaysDate] += time;
    } else {
      storedTimeStats[todaysDate] = time;
    }
    localStorage.setItem("time-stats", JSON.stringify(storedTimeStats));
  }
}

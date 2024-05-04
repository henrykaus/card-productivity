
export const formatDate = (date: Date) => {
  return date.toISOString().slice(0, 10).replaceAll('-', '');
}

const getDateFromAgo = (days: number) => {
  const timeOffset = 86400000 * days;
  return formatDate(new Date(new Date().getTime() - timeOffset));
}

const convertMinutesToClock = (time: number) => {
  const minutes = time % 60;
  const hours = (time - minutes) / 60;
  if (!minutes) {
    return `${hours.toString()}hr`;
  } else {
    return `${hours.toString()}hr ${minutes.toString().padStart(2, '0')}`;
  }
}

export const getStats = () => {
  const storedTimeStatsString = localStorage.getItem("time-stats");
  const todaysDate = formatDate(new Date());
  const weekAgo = parseInt(getDateFromAgo(7));
  const monthAgo = parseInt(getDateFromAgo(30));
  const yearAgo = parseInt(getDateFromAgo(365));

  if (!storedTimeStatsString) {
    return [];
  } else {
    const storedTimeStats = JSON.parse(storedTimeStatsString);
    console.log(storedTimeStats);
    const timeStats = {
      today: storedTimeStats[todaysDate] ? storedTimeStats[todaysDate] : 0,
      lastWeek: 0,
      lastMonth: 0,
      lastYear: 0,
      allTime: 0
    }

    Object.keys(storedTimeStats).forEach((date) => {
      const dateNumber = parseInt(date);
      timeStats.allTime += storedTimeStats[date];
      if (dateNumber >= yearAgo) {
        timeStats.lastYear += storedTimeStats[date];
      }
      if (dateNumber >= monthAgo) {
        timeStats.lastMonth += storedTimeStats[date];
      }
      if (dateNumber >= weekAgo) {
        timeStats.lastWeek += storedTimeStats[date];
      }
    });

    return [
      {
        name: 'All Time',
        time: timeStats.allTime,
        readableTime: convertMinutesToClock(timeStats.allTime),
      },
      {
        name: 'Last Year',
        time: timeStats.lastYear,
        readableTime: convertMinutesToClock(timeStats.lastYear),
      },
      {
        name: 'Last Month',
        time: timeStats.lastMonth,
        readableTime: convertMinutesToClock(timeStats.lastMonth),
      },
      {
        name: 'Last Week',
        time: timeStats.lastWeek,
        readableTime: convertMinutesToClock(timeStats.lastWeek),
      },
      {
        name: 'Today',
        time: timeStats.today,
        readableTime: convertMinutesToClock(timeStats.today),
      },
    ]
  }
}

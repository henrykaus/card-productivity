import React, {ReactElement, useEffect, useState} from 'react';
import './StatsPage.css';
import {Bar, BarChart, LabelList, ResponsiveContainer, XAxis} from "recharts";
import {getStats} from "./statsPageUtils";

const StatsPage = (): ReactElement => {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    setStats(getStats());
  }, []);

  return (
    <article className="StatsPage">
      <section className='StatsPage-graph-container'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={stats} margin={{top: 30, left: 10, right: 10, bottom: 30}} layout='horizontal' barCategoryGap='15%'>
            <Bar dataKey="time" radius={[15, 15, 5, 5]} fill='#ffc07b'>
              <LabelList dataKey="readableTime" position="insideTop" offset={15} fontSize={20} fontWeight={800}
                         fill='#9a6b39'/>
            </Bar>
            <XAxis dataKey="name" tick={{fill: 'white'}} fontSize={20} fontWeight={700} axisLine={false}
                   tickLine={false} dy={5}/>
          </BarChart>
        </ResponsiveContainer>
      </section>
      <section className='StatsPage-stat-container'>
        <h2 className='StatsPage-stat-title'>Today</h2>
        <p className='StatsPage-stat-number'>
          {stats && stats.find((item: any) => item.name === 'Today')?.readableTime}
        </p>
      </section>
      <section className='StatsPage-stat-container'>
        <h2 className='StatsPage-stat-title'>All Time</h2>
        <p className='StatsPage-stat-number'>
          {stats && stats.find((item: any) => item.name === 'All Time')?.readableTime}
        </p>
      </section>
    </article>
  );
}

export default StatsPage;

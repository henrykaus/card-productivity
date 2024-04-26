import React, {ReactElement, useEffect, useState} from 'react';
import './StatsPage.css';
import {Bar, BarChart, Cell, LabelList, ResponsiveContainer, XAxis} from "recharts";
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
          <BarChart width={150} height={40} data={stats} margin={{ top: 30 }} >
            <Bar dataKey="time">
              <LabelList dataKey="readableTime" position="top" />
              {stats && stats.map(() => (
                <Cell fill='#ffc07b' />
              ))}
            </Bar>
            <XAxis dataKey="name" tick={{fill: 'white'}} />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </article>
  );
}

export default StatsPage;

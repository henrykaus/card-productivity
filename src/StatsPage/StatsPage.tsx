import React, {ReactElement, useEffect, useState} from 'react';
import './StatsPage.css';
import {Bar, BarChart, LabelList, ResponsiveContainer, XAxis} from 'recharts';
import {defaultStatsPageSettings, getStats, StatsPageSettings} from './statsPageUtils';
import useMediaQuery from "../hooks/useMediaQuery";

const StatsPage = (): ReactElement => {
  const [stats, setStats] = useState<any>(null);
  const [pageSettings, setPageSettings] = useState<StatsPageSettings>(defaultStatsPageSettings)

  const isMobile = useMediaQuery('(max-width: 615px)');

  useEffect(() => {
    setStats(getStats());
  }, []);

  useEffect(() => {
    if (isMobile) {
      setPageSettings({
        barGraphRadius: 9,
        labelListFontSize: 13,
        xAxisFontSize: 10.5,
        barGap: '11%',
      })
    } else {
      setPageSettings(defaultStatsPageSettings)
    }
  }, [isMobile]);

  return (
    <article className='StatsPage'>
      <section className='StatsPage-graph-container'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            data={stats}
            margin={{top: 30, left: 10, right: 10, bottom: 30}}
            layout='horizontal'
            barCategoryGap={pageSettings.barGap}
          >
            <Bar
              dataKey='time'
              radius={[pageSettings.barGraphRadius, pageSettings.barGraphRadius, 5, 5]}
              fill='#ffc07b'
            >
              <LabelList
                dataKey='readableTime'
                position='insideTop'
                offset={15}
                fontSize={pageSettings.labelListFontSize}
                fontWeight={800}
                fill='#9a6b39'
              />
            </Bar>
            <XAxis
              dataKey='name'
              tick={{fill: 'white'}}
              interval={0}
              fontSize={pageSettings.xAxisFontSize}
              fontWeight={700}
              axisLine={false}
              tickLine={false}
              dy={5}
            />
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

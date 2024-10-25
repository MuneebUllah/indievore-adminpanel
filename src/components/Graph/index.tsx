import React from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import img from 'assets/images/dashboard-users-overview-icon.svg'
import { Graph } from './style';
// Register necessary components
Chart.register(ArcElement, Tooltip, Legend);


interface UsersOverviewProps {
  percentage: number,
  text:string
  color:string
}

const DashboardOverviewChart: React.FC<UsersOverviewProps> = ({ text, percentage , color}) => {
  return (
    <CircularProgressbarWithChildren
    styles={buildStyles({
      pathColor: color,
      // trailColor: "gold"
    })}
    value={percentage}>
      <Graph>
        <img
          style={{ width: 40, marginTop: -5 }}
          src={img}
          alt="doge"
        />
        <div  className='graph'>
          <span style={{ fontSize: '32px', fontWeight: 600 }}>{percentage}</span>
          <h1>{text}</h1>
        </div>
      </Graph>
    </CircularProgressbarWithChildren>
  )
};

export { DashboardOverviewChart };

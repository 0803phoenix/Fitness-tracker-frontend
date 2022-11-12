import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import DonutChart from "react-donut-chart";

export default class Report extends React.Component {
  render() {
    
    const data = [
      {
        label: "Calories Consumed",
        value: 200
      },
      {
        label: "Calories Burned",
        value: 300
      }
    ];

    const colors = ["#60b644", "#FF0000"];


    return (
      <section style={{width: '10%', height: '10%'}}>
        
        <DonutChart colors={colors} data={data} options={{
          responsive: true,
          maintainAspectRatio: false,
        }}/>
      </section>
    );
  }
}

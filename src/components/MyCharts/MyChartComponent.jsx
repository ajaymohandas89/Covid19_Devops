import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from "recharts";
import React, {Component} from "react";

class MyChartComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {allCountryData} = this.props;
    const data = [];
    //setting country name as X and total cases as Y coordinates for the graph
    for (var i = 0; i < allCountryData.length; i++) {
      if (allCountryData[i].cases > 10000) {
        data.push({
          name: allCountryData[i].country,
          cases: allCountryData[i].cases,
        });
      }
    }

    return (
      <LineChart width={1200} height={300} data={data} margin={{top: 15, right: 20, bottom: 5, left: 70}}>
        <Line type="monotone" dataKey="cases" stroke="#922b21" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    );
  }
}

export default MyChartComponent;

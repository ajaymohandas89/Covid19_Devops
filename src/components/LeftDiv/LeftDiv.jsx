import React, {Component} from "react";
import "./LeftDiv.css";
class LeftDiv extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const alldata = this.props.allData !== undefined ? this.props.allData : null;
    return (
      <div className="LeftDiv" style={{display: "inline-block", float: "left"}}>
        <h4>Total Cases Confirmed</h4>
        {/* display the total number here */}
        <table id="covidTableData" border="2" align="center">
          <caption style={{marginBottom: "15px"}}>Confirmed Cases by Country/Region/Sovereignty</caption>
          <thead>
            <tr>
              <th>cases</th>
              <th>todayCases</th>
              <th>deaths</th>
              <th>todayDeaths</th>
              <th>recovered</th>
              <th>active</th>
              <th>critical</th>
              <th>casesPerOneMillion</th>
              <th>deathsPerOneMillion</th>
              <th>tests</th>
              <th>testsPerOneMillion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{alldata.cases}</td>
              <td>{alldata.todayCases}</td>
              <td>{alldata.deaths}</td>
              <td>{alldata.todayDeaths}</td>
              <td>{alldata.recovered}</td>
              <td>{alldata.active}</td>
              <td>{alldata.critical}</td>
              <td>{alldata.casesPerOneMillion}</td>
              <td>{alldata.deathsPerOneMillion}</td>
              <td>{alldata.tests}</td>
              <td>{alldata.testsPerOneMillion}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default LeftDiv;

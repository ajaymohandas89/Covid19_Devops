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
        <h4 style={{textDecoration: "underline"}}>Total Cases: {alldata.cases}</h4>
        {/* display the total number here */}
        <table id="covidTableData" border="1" align="center" style={{borderRadius: "10px"}}>
          <caption style={{marginBottom: "15px"}}>World report of confirmed cases</caption>
          <thead>
            <tr>
              <th>Cases</th>
              <th>Today cases</th>
              <th>Deaths</th>
              <th>Today deaths</th>
              <th>Recovered</th>
              <th>Active</th>
              <th>Critical</th>
              <th>Cases Per One Million</th>
              <th>Deaths Per One Million</th>
              <th>Tests</th>
              <th>Tests Per One Million</th>
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

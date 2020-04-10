import React, {Component} from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import LeftDiv from "./LeftDiv/LeftDiv";
import TableData from "./RightDiv/TableData";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./RightDiv/RightDiv.css";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "all",
      countrySpecificData: undefined,
      allData: undefined,
      allCountryData: undefined,
    };
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount() {
    fetch(`https://corona.lmao.ninja/all`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Authorization",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => this.setState({allData: data}));

    fetch(`https://corona.lmao.ninja/countries`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Authorization",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => this.setState({allCountryData: data}));
  }
  onChange(newCtryName, newCountrySpecificData) {
    this.setState({country: newCtryName});
    this.setState({countrySpecificData: newCountrySpecificData});
  }

  render() {
    const country = this.state.country;
    const leftDivAllData = this.state.allData !== undefined ? <LeftDiv allData={this.state.allData} /> : null;
    return (
      <div className="HomePage">
        <Header />
        {leftDivAllData}
        <Router>
          <TableData country={country} onCountryChange={this.onChange} />
          <Switch>
            <Route exact path="/displayCountryData/:country" children={<Detail {...this.state} />} />
            <Route exact path="/displayAllCountryData" children={<AllData data={this.state.allCountryData} />} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

function Detail(props) {
  let country = props.country;
  const countrySpecificData = props.countrySpecificData;
  return (
    <div className="form-container2" style={{display: "inline-block", float: "right", marginLeft: "auto", marginRight: "auto"}}>
      <div className="fullDetailedReport" style={{color: "#212020", fontWeight: "bold"}}>
        <table lassName="countryDiv" border="2" align="center">
          <caption style={{marginBottom: "15px"}}>Detailed Report on Covid19</caption>
          <thead>
            <tr>
              <th>Country</th>
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
              <td>{country}</td>
              <td>{countrySpecificData.cases}</td>
              <td>{countrySpecificData.todayCases}</td>
              <td>{countrySpecificData.deaths}</td>
              <td>{countrySpecificData.todayDeaths}</td>
              <td>{countrySpecificData.recovered}</td>
              <td>{countrySpecificData.active}</td>
              <td>{countrySpecificData.critical}</td>
              <td>{countrySpecificData.casesPerOneMillion}</td>
              <td>{countrySpecificData.deathsPerOneMillion}</td>
              <td>{countrySpecificData.tests}</td>
              <td>{countrySpecificData.testsPerOneMillion}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AllData(props) {
  const allCountryData = props;
  const countryList = [];
  const caseList = [];
  countryList.push("Country");
  caseList.push("Total Cases");
  for (var i = 0; i < allCountryData.data.length; i++) {
    countryList.push(allCountryData.data[i].country);
    caseList.push(allCountryData.data[i].cases);
  }
  const result = [];
  result.push.apply(result, [countryList]);
  result.push.apply(result, [caseList]);

  return (
    <div className="form-container1" style={{display: "inline-block", float: "right", marginLeft: "auto", marginRight: "auto"}}>
      <h3>Total cases in each country</h3>
      <div className="fullDetailedReport" style={{color: "#212020", fontWeight: "bold"}}>
        <table lassName="countryDiv" border="2" align="center">
          <tbody>
            {result.map((numList, i) => (
              <tr key={i}>
                {numList.map((num, j) => (
                  <td key={j}>{num}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;

import React, {Component} from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import LeftDiv from "./LeftDiv/LeftDiv";
import TableData from "./RightDiv/TableData";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./RightDiv/RightDiv.css";
import {Button, Modal} from "react-bootstrap";
import MyChartComponent from "./MyCharts/MyChartComponent";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalChart: false,
      country: "USA",
      countrySpecificData: undefined,
      allData: undefined,
      allCountryData: undefined,
    };
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount() {
    fetch(`https://corona.lmao.ninja/v2/all`, {
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

    fetch(`https://corona.lmao.ninja/v2/countries`, {
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
    console.log(newCtryName);
    if (newCtryName == undefined) {
      window.alert("Please enter a value to get country specific data");
    }
    this.setState({country: newCtryName});
    this.setState({countrySpecificData: newCountrySpecificData});
  }
  openChart = () => {
    if (this.state.modalChart == false) {
      this.setState({modalChart: true});
    } else {
      this.setState({modalChart: false});
    }
  };
  render() {
    const country = this.state.country;
    const leftDivAllData = this.state.allData !== undefined ? <LeftDiv allData={this.state.allData} /> : null;
    const chart = this.state.modalChart != false ? <MyChartComponent allCountryData={this.state.allCountryData} /> : null;
    const btnStyle = {
      border: "2px solid #922b21",
      borderRadius: "5px",
      padding: "10px",
      fontSize: "17px",
      fontWeight: "bold",
    };
    return (
      <div className="HomePage">
        <Header />
        <Tooltip title="Click to view chart and click again to close chart">
          <IconButton aria-label="Click to view chart and click again to close chart">
            <Button onClick={this.openChart} style={btnStyle}>
              Chart
            </Button>
          </IconButton>
        </Tooltip>

        <div style={{marginBottom: "10px"}}>{chart}</div>
        {leftDivAllData}

        <Router>
          <TableData country={country} onCountryChange={this.onChange} />
          <Switch>
            <Route exact path="/displayCountryData/:country" children={<Detail {...this.state} />} />
            <Route exact path="/displayAllCountryData" children={<AllCountryData data={this.state.allCountryData} />} />
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
        <table border="1" align="center" style={{borderRadius: "10px"}}>
          <caption style={{marginBottom: "15px", textDecoration: "underline"}}>Detailed Report of {country} on Covid19</caption>
          <thead>
            <tr>
              <th>Country</th>
              <th>Cases</th>
              <th>Today Cases</th>
              <th>Deaths</th>
              <th>Today Deaths</th>
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

function AllCountryData(props) {
  const allCountryData = props;
  const sortedData = [];
  console.log("allCountryData.data", allCountryData.data);
  const cardLayout = {
    backgroundColor: "#f8f8ff",
    marginBottom: "20px",
  };
  const textWeight = {
    fontWeight: "bold",
  };
  for (var i = 0; i < allCountryData.data.length; i++) {
    sortedData.push({
      country: allCountryData.data[i].country,
      cases: allCountryData.data[i].cases,
      active: allCountryData.data[i].active,
      death: allCountryData.data[i].deaths,
      flagImg: allCountryData.data[i].countryInfo.flag,
      todayCases: allCountryData.data[i].todayCases,
      todayDeaths: allCountryData.data[i].todayDeaths,
    });
  }
  console.log("Sorted all country datat", sortedData);
  return (
    <div id="values" className="values" style={cardLayout}>
      <div className="row">
        {sortedData.map((temp) => (
          <div className="column">
            <div className="card">
              <h4 style={{fontWeight: "bold", textDecoration: "underline"}}>{temp.country}</h4>
              <img src={temp.flagImg} width="75px" height="70px" alt="flag" />
              <p style={textWeight}>Total cases: {temp.cases}</p>
              <p style={textWeight}>Active cases: {temp.active}</p>
              <p style={textWeight}>Total deaths: {temp.death}</p>
              <p style={textWeight}>Today's cases: {temp.todayCases}</p>
              <p style={textWeight}>Today's death: {temp.todayDeaths}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

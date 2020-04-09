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
    };
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount() {
    console.log("componentWillMount()");
    fetch(`https://corona.lmao.ninja/all`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Authorization",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => this.setState({allData: data}));
  }
  onChange(newCtryName, newCountrySpecificData) {
    this.setState({country: newCtryName});
    this.setState({countrySpecificData: newCountrySpecificData});
  }

  render() {
    const students = this.state.students;
    const country = this.state.country;
    const leftDivAllData = this.state.allData !== undefined ? <LeftDiv allData={this.state.allData} /> : null;
    return (
      <div className="HomePage">
        <Header />
        {leftDivAllData}
        <Router>
          <TableData students={students} country={country} onCountryChange={this.onChange} />
          <Switch>
            <Route exact path="/displayCountryData/:country" children={<Detail {...this.state} />} />
            <Route exact path="/displayAllCountryData" children={<AllData {...this.state} />} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

function Detail(props) {
  const students = props.students;
  let country = props.country;
  const countrySpecificData = props.countrySpecificData;
  return (
    <div className="form-container1" style={{display: "inline-block", float: "right", marginLeft: "auto", marginRight: "auto"}}>
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
  const students = props.students;
  let country = props.country;
  let header = Object.keys(students[0]);
  return (
    <div className="form-container1" style={{display: "inline-block", float: "right", marginLeft: "auto", marginRight: "auto"}}>
      <div className="fullDetailedReport" style={{color: "#212020", fontWeight: "bold"}}>
        <table lassName="countryDiv" border="2" align="center">
          <caption style={{marginBottom: "15px"}}>Detailed Report on Covid19</caption>
          <thead>
            <tr>
              {header.map((student, index) => (
                <th key={index}>{student.toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;

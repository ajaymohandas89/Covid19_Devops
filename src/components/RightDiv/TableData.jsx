import React, {Component} from "react";
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./RightDiv.css";

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countrySpecificData: undefined,
    };
  }
  onCountryNameChange(e) {
    this.setState(
      {
        newCountryName: e.target.value,
      },
      () => {
        const countryNm = this.state.newCountryName;
        console.log("Query handler", countryNm);

        fetch(`https://corona.lmao.ninja/countries/${countryNm}`, {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Authorization",
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            //console.log("Covid19 response", response.json());
            return response.json();
          })
          .then((data) => this.props.onCountryChange(this.state.newCountryName, data));
      }
    );
    //this.props.onCountryChange(e.target.value);
  }
  // onSelectCountry() {
  //   console.log("Button called", this.state.newCountryName);
  //   //this.props.onCountryChange(this.state.newCountryName);
  //   this.props.onCountryChange(this.state.newCountryName);
  // }

  render() {
    const hyperLinkColor = {
      color: "#212020",
      textDecoration: "none",
      fontWeight: "bold",
      border: "3px solid black",
      padding: "5px",
    };
    const {students, country} = this.props;
    return (
      <div className="form-container" style={{display: "inline-block", float: "right", marginLeft: "auto", marginRight: "auto"}}>
        <div className="countryDiv">
          <label htmlFor="country-name">Country: </label>
          <input id="country-name" type="text" placeholder="enter country name" onBlur={this.onCountryNameChange.bind(this)} style={{border: "3px solid"}}></input>
          {/* <button className="btn btn-select-location" onClick={this.onSelectCountry.bind(this)} style={{border: "3px solid"}}>
            Country Specific Data
          </button> */}
        </div>
        <Link style={hyperLinkColor} to={`/displayAllCountryData`}>
          Get World report
        </Link>
        <Link style={hyperLinkColor} to={`/displayCountryData/${country}`}>
          Get Country Specific data
        </Link>
      </div>
    );
  }
}
export default TableData;

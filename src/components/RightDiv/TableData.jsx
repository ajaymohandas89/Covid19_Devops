import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./RightDiv.css";
import {fetchUrl} from "../../configFile/urlFile";

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countrySpecificData: undefined,
    };
  }
  // set country specific data and send data to Dashboard.jsx
  onCountryNameChange(e) {
    e.preventDefault();
    this.setState(
      {
        newCountryName: e.target.value,
      },
      () => {
        const countryNm = this.state.newCountryName;
        fetch(`${fetchUrl}/countries/${countryNm}`, {
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
          .then((data) => this.props.onCountryChange(this.state.newCountryName, data));
      }
    );
  }

  render() {
    const hyperLinkColor = {
      textDecoration: "none",
      fontWeight: "bold",
      border: "3px solid #922b21",
      padding: "5px",
      marginLeft: "50px",
      borderRadius: "5px",
    };
    const {country} = this.props;
    return (
      <div className="form-container" style={{display: "inline-block", float: "right", marginLeft: "auto", marginRight: "auto"}}>
        <div className="countryDiv">
          <label htmlFor="country-name" style={{fontWeight: "bold"}}>
            Country:{" "}
          </label>
          <input id="country-name" type="text" placeholder="enter country name" onBlur={this.onCountryNameChange.bind(this)} style={{border: "3px solid #922b21", height: "20px"}}></input>
        </div>
        {/* hyperlinks to route path to Dashboard */}
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

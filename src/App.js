import React, {Component} from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";

class App extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      country: "all",
      students: [
        {id: 1, name: "Wasif", age: 21, email: "wasif@email.com"},
        {id: 2, name: "Ali", age: 19, email: "ali@email.com"},
        {id: 3, name: "Saad", age: 16, email: "saad@email.com"},
        {id: 4, name: "Asad", age: 25, email: "asad@email.com"},
        {id: 5, name: "Asad", age: 25, email: "asad@email.com"},
      ],
    };
    //this.onChange = this.onChange.bind(this);
  }

  // onChange(newAppCtryNm) {
  //   var temp = null;
  //   this.setState({country: newAppCtryNm}, () => {});
  // }
  render() {
    return (
      <div className="App">
        <Dashboard />
        {/* <div id="map"></div> */}
      </div>
    );
  }
}

export default App;

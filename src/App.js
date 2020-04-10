import React, {Component} from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";

class App extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
  }
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;

import React, {Component} from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Home page for our app */}
        <Dashboard />
      </div>
    );
  }
}

export default App;

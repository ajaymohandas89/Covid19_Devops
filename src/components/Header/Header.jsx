import React, {Component} from "react";
import "./Header.css";
import ToggleTheme from "../ToggleTheme";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>Coronavirus COVID-19 Global Dashboard</h1>
        <div className="Title-Subtitle"></div>
        <Tooltip title="Theme Change">
          <IconButton aria-label="Theme Change">
            <ToggleTheme />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}

export default Header;

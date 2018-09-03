import React, { Component } from "react";
import Toolbar from '../Toolbar/Toolbar'

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        This is the Home me page.
        <Toolbar />
      </div>
    );
  }
}
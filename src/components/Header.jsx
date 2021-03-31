import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div id="header-text">
          <p className="text-light ml-1">
            A dying man makes a desperate bid to save his family.
            <br />
            But in the meth trade, there are fates far worse than death
          </p>
          <Button className="btn btn-lg mx-1 play-button">
            <i className="fas fa-play" />
            Play
          </Button>
          <Button className="btn btn-lg btn-info text-light mx-1">
            <i className="fas fa-info-circle" />
            More info
          </Button>
        </div>
      </header>
    );
  }
}

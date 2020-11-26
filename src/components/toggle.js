import React, { Component } from "react";
import Surprise from "./surprise";
import Button from 'react-bootstrap/Button';

class Toggle extends Component {
  state = {
    showSurprise: true
  };
  revealSurprise = () => {
    this.setState({ showSurprise: !this.state.showSurprise });
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <h2>Challenge 3: Toggle</h2>
        <Button variant="outline-success" onClick={this.revealSurprise}>{!this.state.showSurprise ? "Show" : "Remove" } the cute sloth</Button>
        {this.state.showSurprise ? <Surprise /> : ""}
      </div>
    );
  }
}

export default Toggle;
import Spam from "./Spam";
import React, { Component } from "react";

class Spamalot extends Component {
  // your code here...
  render() {
    let array = [];
    for (let i = 0; i < 500; i++) {
      array.push(<Spam />);
    }
    return array;
  }
}

export default Spamalot;

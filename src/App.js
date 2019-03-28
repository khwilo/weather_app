import React, { Component } from "react";

import Form from "./components/Form";
import Titles from "./components/Titles";
import Weather from "./components/Weather";

class App extends Component {
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;

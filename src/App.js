import React, { Component } from "react";

import Form from "./components/Form";
import Titles from "./components/Titles";

class App extends Component {
  render() {
    return (
      <div>
        <Titles />
        <Form />
      </div>
    );
  }
}

export default App;

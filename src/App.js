import React, { Component } from "react";

import Form from "./components/Form";
import Titles from "./components/Titles";
import Weather from "./components/Weather";

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {
  getWeather = async (e) => {
    e.preventDefault();

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Kiambu,ke&appid=${WEATHER_API_KEY}&units=metric`);

    const data = await api_call.json();

    console.log(data);
  }
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;

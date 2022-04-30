import React, { Component } from "react";
import "./App.css";
import CountriesList from "./CountriesList";
import Country from "./Country";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <header className="App-header">
              <Link to="/">
                <h1 className="App-title">Countries Of The World</h1>
              </Link>
            </header>

            <main className="AppBody">
              <Switch>
                <Route exact path="/" component={CountriesList} />
                <Route path="/country/:name" component={Country} />
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

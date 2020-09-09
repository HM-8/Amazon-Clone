import React from "react";
import "./App.css";
import Header from "./Components/Header";
import HeaderTwo from "./Components/HeaderTwo";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <HeaderTwo />

        <Switch>
          {/* checkout route */}
          <Route path='/checkout'>
            <Checkout />
          </Route>

          {/* home route/ Default route */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

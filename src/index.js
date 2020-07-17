import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import axios from "axios";
import { Switch, Route } from 'react-router-dom';
import Coin from './components/Coin';
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  console.log(coinData);
  return (
    <div className="App">
      <Navbar />

      <Switch>

        <Route path="/coins/:id">
          <Coin coinData={coinData} />
        </Route>

        <Route path = "/coins">
        <Charts coinData={coinData} />
        </Route>

      </Switch>
      
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);

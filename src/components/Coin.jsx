import React from 'react';
import { useParams } from "react-router-dom";
import Chart from "./Chart";

const Coin = ({ coinData }) => {

    const { id } = useParams();
    console.log(id)
    const coin = coinData.find(coin => coin.id === id);
    console.log('coin data', coin)

    return (
      <div> 
      {coin === undefined ? null :
        <div style={{display: 'flex', alignItems: 'center'}}>
        <div className="chart__container" key={coin.id}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div> 
        <div>
          <table>
            <tr>
              <td>Price:</td>
              <td>{coin.current_price}<span 
                // className= {coin.price_change_percentage_24h.includes('-') ? 'negative' : 'positive'}
                >
                ({coin.price_change_percentage_24h}%)</span>
                </td>
            </tr>
            <tr>
              <td>Market Cap:</td>
              <td>{coin.market_cap}</td>
            </tr>
            <tr>
              <td>24h Low / High:</td>
              <td>{`${coin.low_24h}/${coin.high_24h}`}</td>
            </tr>
            <tr>
              <td>Volume:</td>
              <td>{coin.total_volume}</td>
            </tr>
          </table>
        </div> 
      </div>
      }
      </div>
    );
};

export default Coin;
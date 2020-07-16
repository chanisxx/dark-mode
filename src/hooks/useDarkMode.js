import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';


const useDarkMode = (initialValue) => {
   const [darkMode, setDarkMode] = useLocalStorage('isDarkModeOn?', initialValue);
    const body = document.querySelector('body');
    useEffect(()=> {
        return darkMode ? body.classList.add('dark-mode'): body.classList.remove('dark-mode');
    }, [darkMode]);

    return [darkMode, setDarkMode];
}

export default useDarkMode;

//                           ath: 19665.39
//                           ath_change_percentage: -53.18114
//                           ath_date: "2017-12-16T00:00:00.000Z"
//                           atl: 67.81
//                           atl_change_percentage: 13478.01097
//                           atl_date: "2013-07-06T00:00:00.000Z"
// circulating_supply: 18432587
//                           current_price: 9202.97
//                           high_24h: 9322.91
//                           id: "bitcoin"
//                           image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
// last_updated: "2020-07-14T13:31:06.063Z"
//                            low_24h: 9149.1
//                            market_cap: 169681683726
// market_cap_change_24h: -1919793670.6664126
// market_cap_change_percentage_24h: -1.11875
// market_cap_rank: 1
//                           name: "Bitcoin"
//                           price_change_24h: -109.54494846
//                           price_change_percentage_24h: -1.17632
// roi: null
// sparkline_in_7d: {price: Array(169)}
//                           symbol: "btc"
// total_supply: 21000000
//                           total_volume: 19452722783
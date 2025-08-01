import React, { use, useEffect } from 'react';

function CoinTrackerApp() {
    const [loading, setLoading] = React.useState(true);
    const [coins, setCoins] = React.useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCoins(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    },[]);
    return (
        <div>
            <h1>Coin Tracker ({loading ? 0 : coins.length})</h1>
            {loading ? <strong>Loading...</strong> : (
                <select>
                    {coins.map(coin => (
                        <option key={coin.id} value={coin.id}>
                            {coin.name}({coin.symbol}): ${Math.round(coin.quotes.USD.price * 100) / 100}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
}

export default CoinTrackerApp;
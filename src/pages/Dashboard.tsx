import CryptoCard from "../components/CryptoCard";
import { useFetch } from "../hooks/useFetch";
import { getTopCoins } from "../api/coingecko";

export default function Dashboard() {
  const { data, loading } = useFetch(getTopCoins);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Top 10 Cryptocurrencies</h1>
      <div className="crypto-grid">
        {data?.map((coin) => (
          <CryptoCard
            key={coin.id}
            id={coin.id}
            name={coin.name}
            image={coin.image}
            price={coin.current_price}
            marketCap={coin.market_cap}
          />
        ))}
      </div>
    </div>
  );
}

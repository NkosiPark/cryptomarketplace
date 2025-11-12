import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { getCoinDetails } from "../api/coingecko";

export default function CryptoDetails() {
  const { id } = useParams();
  const { data, loading } = useFetch(() => getCoinDetails(id!));

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{data?.name}</h1>
      <img src={data?.image.large} width={100} />

      <p>Current Price: R{data?.market_data.current_price.zar.toLocaleString()}</p>
      <p>Market Cap: R{data?.market_data.market_cap.zar.toLocaleString()}</p>
      <p>Total Supply: {data?.market_data.total_supply ?? "N/A"}</p>
      <p>Rank: #{data?.market_cap_rank}</p>
    </div>
  );
}

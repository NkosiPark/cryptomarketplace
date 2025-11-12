import axios from "axios";

const API = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

export const getTopCoins = async () => {
  const res = await API.get(
    "/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=10&page=1"
  );
  return res.data;
};

export const getCoinDetails = async (id: string) => {
  const res = await API.get(
    `/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`
  );
  return res.data;
};

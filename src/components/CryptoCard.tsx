import { Link } from "react-router-dom";

type Props = {
  id: string;
  name: string;
  image: string;
  price: number;
  marketCap: number;
};

export default function CryptoCard({ id, name, image, price, marketCap }: Props) {
  return (
    <Link to={`/coin/${id}`}>
      <div className="card">
        <img src={image} alt={name} width={40} />
        <h3>{name}</h3>
        <p>Price: R{price.toLocaleString()}</p>
        <p>Market Cap: R{marketCap.toLocaleString()}</p>
      </div>
    </Link>
  );
}

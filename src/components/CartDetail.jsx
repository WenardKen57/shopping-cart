import { useState } from "react";
import { useData } from "../useData";

export default function CartDetail({ productId, quantity }) {
  const [orderQuantity, setOrderQuantity] = useState(quantity);
  const { data, loading, error } = useData(
    `https://fakestoreapi.com/products/${productId}`
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <li>
      <div>Title: {data && data.title}</div>
      <input
        type="number"
        onChange={(e) => setOrderQuantity(e.target.value)}
        value={orderQuantity}
      />
    </li>
  );
}

import { useState } from "react";

export default function CartDetail({ title, price, image, quantity }) {
  const [orderQuantity, setOrderQuantity] = useState(quantity);

  return (
    <li>
      <img src={image} alt="product img" width={100} />
      <div>Title: {title}</div>
      <span>Total: {price * orderQuantity}</span>
      <input
        type="number"
        onChange={(e) => setOrderQuantity(e.target.value)}
        value={orderQuantity}
      />
    </li>
  );
}

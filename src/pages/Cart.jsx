import { useEffect, useState } from "react";
import { getCart } from "../CartAPI";

export default function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchCart = async () => {
      const cartRes = await getCart();

      setCart(cartRes);
    };

    fetchCart();
  }, []);

  return (
    <div>
      <ul>
        {cart.map((item) => {
          return (
            <li>
              Name: {item.product.title}{" "}
              <input
                type="number"
                placeholder="Quantity"
                value={item.quantity}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import { useEffect, useState } from "react";
import { getCart } from "../CartAPI";
import { v4 as uuidv4 } from "uuid";
import styles from "./../styles/Cart.module.css";

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
            <li className={styles.cartItem} key={uuidv4()}>
              <img src={item.product.image} width={100} alt="" />
              Name: {item.product.title}{" "}
              <input
                type="number"
                placeholder="Quantity"
                defaultValue={item.quantity}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

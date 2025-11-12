import { useEffect, useState } from "react";
import { getCart, getTotalPayment } from "../CartAPI";
import { v4 as uuidv4 } from "uuid";
import styles from "./../styles/Cart.module.css";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      const cartRes = await getCart();

      setCart(cartRes);
    };

    const fetchTotalPayment = async () => {
      const res = await getTotalPayment();
      setTotalPayment(res);
    };

    fetchTotalPayment();
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
      <div>{totalPayment}</div>
    </div>
  );
}

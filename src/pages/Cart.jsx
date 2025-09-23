import { useEffect, useState } from "react";
import CartDetail from "../components/CartDetail";
import { useData } from "../useData";
import { v4 as uuid4 } from "uuid";

export default function Cart() {
  const cartId = 1;
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const cartResponse = await fetch(
          `https://fakestoreapi.com/carts/${cartId}`
        );
        const cart = await cartResponse.json();
        setCart(cart);

        const productRequests = cart.products.map(async (p) => {
          const res = await fetch(
            `https://fakestoreapi.com/products/${p.productId}`
          );
          const productData = await res.json();
          return { ...productData, quantity: p.quantity };
        });

        const productData = await Promise.all(productRequests);
        setProducts(productData);
      } catch (err) {
        throw new Error("Server failed", err);
      }
    };

    fetchAll();
  }, []);

  if (!cart) return <h1>No carts found</h1>;

  return (
    <div>
      <ul>
        {products ? (
          products.map((product) => {
            return (
              <CartDetail
                key={uuid4()}
                title={product.title}
                image={product.image}
                price={product.price}
                quantity={product.quantity}
              ></CartDetail>
            );
          })
        ) : (
          <p>No products found</p>
        )}
      </ul>
    </div>
  );
}

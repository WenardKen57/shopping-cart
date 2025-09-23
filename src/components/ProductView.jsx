import { redirect, useParams } from "react-router-dom";
import style from "./style.module.css";
import { useData } from "../useData";
import { useState } from "react";
import { addToCart } from "../CartAPI";

export async function useAddToCart(cart) {
  try {
    const response = await fetch(`https://fakestoreapi.com/carts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cart),
    });
    if (!response.ok) throw new Error("Failed to post cart");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    throw new Error("There's a network error that occured");
  }
}

export default function ProductsView() {
  const { id } = useParams();
  const { data, error, loading } = useData(
    `https://fakestoreapi.com/products/${id}`
  );
  const [quantity, setQuantity] = useState(1);

  function handleAddToCart() {
    const callAddToCart = async () => {
      await addToCart(data, quantity);
    };

    callAddToCart();
    setQuantity(1);
  }

  if (loading) return <h1>Loading...</h1>;
  if (error)
    return <h1>There's a network error that occured {error.message}</h1>;
  if (!data) return <h1>No data found</h1>;

  return (
    <>
      <div className={style.productView}>
        <div>
          <img src={data.image} alt="" />
        </div>
        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <h2>{data.price}</h2>
        </div>
        <span>
          <h3>Total price: {data.price * quantity}</h3>
          <button
            onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
          >
            +
          </button>
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
          <button
            onClick={() => setQuantity((prevQuantity) => prevQuantity - 1)}
          >
            -
          </button>
        </span>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </>
  );
}

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./style.module.css";

export default function ProductView() {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const [cartForm, setCartForm] = useState(false);
  const [quantity, setQuantity] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (response.status > 400) throw new Error("Server response errro");
        const result = await response.json();
        setProducts(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return "Loading...";
  if (error) return "Network error occured";

  const product = products.find((item) => item.id === Number(id));

  if (!product) return <p>Product not found</p>;

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <>
      <div className={style.productView}>
        <div>
          <img src={product.image} alt="" />
        </div>

        <div>
          <h1>{product && product.title}</h1>
          <p>{product && product.description}</p>
          <h3>${product && product.price}</h3>
          {cartForm && (
            <dialog open>
              <h2>{product.title}</h2>
              <h3>${product.price * quantity}</h3>
              <form method="dialog">
                <input
                  type="number"
                  placeholder="How many of this item?"
                  onChange={handleChangeQuantity}
                  required
                />
              </form>
              <button
                onClick={() => {
                  setCartForm(false);
                }}
                type="submit"
              >
                OK
              </button>
            </dialog>
          )}
          <button
            onClick={() => {
              setCartForm(true);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

import CartDetail from "../components/CartDetail";
import { useData } from "../useData";
import { v4 as uuid4 } from "uuid";

export default function Cart() {
  const cartId = 1;
  const { data, loading, error } = useData(
    `https://fakestoreapi.com/carts/${cartId}`
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;
  if (!data) return <h1>No data found</h1>;

  return (
    <div>
      <ul>
        {data.products.map((product) => {
          return (
            <CartDetail
              key={uuid4()}
              productId={product.productId}
              quantity={product.quantity}
            />
          );
        })}
      </ul>
    </div>
  );
}

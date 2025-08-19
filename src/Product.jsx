import { useData } from "./useData";

export default function Product() {
  const { data, loading, error } = useData("https://fakestoreapi.com/products");

  if (loading) return "Loading...";
  if (error) return console.log(error);

  return (
    <ul>
      {data &&
        data.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
    </ul>
  );
}

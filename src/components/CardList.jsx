import { useData } from "../useData";
import Card from "./Card";
import classes from "./style.module.css";

export default function CardList() {
  const { data, loading, error } = useData("https://fakestoreapi.com/products");

  if (loading) return "Loading...";
  if (error) return "Network error occured";

  return (
    <>
      <ul className={classes.cardList}>
        {data &&
          data.map((product) => {
            return (
              <Card
                id={product.id}
                img={product.image}
                key={product.id}
                title={product.title}
                price={product.price}
              />
            );
          })}
      </ul>
    </>
  );
}

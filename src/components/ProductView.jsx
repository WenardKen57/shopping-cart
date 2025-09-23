import { useParams } from "react-router-dom";
import style from "./style.module.css";
import { useData } from "../useData";

export default function ProductsView() {
  const { id } = useParams();
  const { data, error, loading } = useData(
    `https://fakestoreapi.com/products/${id}`
  );

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
        </div>
      </div>
    </>
  );
}

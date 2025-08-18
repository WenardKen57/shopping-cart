import { useEffect, useState } from "react";

function useData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, { mode: "cors" });

        if (response.status > 400) {
          throw new Error("Server error");
        }

        const result = await response.json();

        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

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

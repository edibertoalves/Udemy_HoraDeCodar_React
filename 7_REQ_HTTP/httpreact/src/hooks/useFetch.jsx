// importar useState e useEffect do React
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  // instanciar a variável de estado
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, [url]);

  return {data}
};

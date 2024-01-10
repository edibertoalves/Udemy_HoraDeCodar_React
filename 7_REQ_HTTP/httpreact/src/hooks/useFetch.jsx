// importar useState e useEffect do React
import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
  // instanciar a variável de estado
  const [data, setData] = useState(null);

  // 5 - refatorando post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6 - loading
  const [loading, setLoading] = useState(false);

  // 7 - tratando erros
  const [error, setError] = useState(null);


  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
    }

    setMethod(method)
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error(error.message);
        setError("Houve um erro ao carregar os dados");
      }


      setLoading(false);
    };

    fetchData();

  }, [url, callFetch]);


  // 5 - refatorando o post
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json);
      }
    };

    httpRequest();


  }, [config, url, method]);

  return { data, httpConfig, loading, error };
};

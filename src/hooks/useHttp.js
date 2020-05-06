import { useCallback, useState } from "react";

//This custom hooks handles html requests
import Axios from "axios";
export default function useHttp() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("there is an error");

  const sendRequest = useCallback((url, header, query) => {
    setLoading(true);
    Axios.get(url, {
      headers: {
        ...header,
      },
      params: {
        q: query,
      },
    })
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { loading, data, error, sendRequest };
}

import { useCallback, useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url, {
        methode: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
};

export default useFetch;

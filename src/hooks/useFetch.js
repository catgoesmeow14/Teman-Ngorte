import { useCallback, useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const token = JSON.parse(localStorage.getItem('token'));

    try {
      const response = await fetch(url, {
        methode: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'x-access-token': token,
          'Access-Control-Allow-Origin': '*',
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

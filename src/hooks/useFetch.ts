import { useCallback, useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<any>([]);

  const fetchData = useCallback(async () => {
    const token = JSON.parse(localStorage.getItem('user') || '');

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
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

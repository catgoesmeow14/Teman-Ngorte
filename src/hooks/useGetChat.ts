import { useCallback, useEffect, useState } from 'react';

const useGetChat = (url: string) => {
  const [data, setData] = useState<any>([]);

  const fetchData = useCallback(async () => {
    const token = JSON.parse(localStorage.getItem('token') || '');

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

export default useGetChat;

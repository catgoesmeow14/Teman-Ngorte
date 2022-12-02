import { useCallback, useEffect, useState } from 'react';
import { ChatListResponseType } from '../types/chatlist-type';

const useGetChat = () => {
  const [data, setData] = useState<ChatListResponseType>({ message: '' });
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    const token = JSON.parse(localStorage.getItem('token') || '');
    setLoading(true);

    try {
      // const response = await fetch('https://cors-anywhere.herokuapp.com/https://api-teman-ngorte-wsph3rjooq-et.a.run.app/chatbot-user', {
      const response = await fetch(
        'https://api-teman-ngorte-wsph3rjooq-et.a.run.app/chatbot-user',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: 'Bearer ' + token,
          },
        }
      );
      setData(await parseJson(response));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { loading, data };
};

async function parseJson(data: Response): Promise<ChatListResponseType> {
  try {
    const result: ChatListResponseType = await data.json();
    return result;
  } catch (ex) {}
  return new ChatListResponseType('Error parsing json');
}

export default useGetChat;

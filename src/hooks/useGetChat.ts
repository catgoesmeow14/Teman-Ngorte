import { useCallback, useEffect, useState } from 'react';
import { ChatListResponseType } from '../types/chatlist-type';

const useGetChat = () => {
  const [data, setData] = useState<ChatListResponseType>({ message: '' });

  const fetchData = useCallback(async () => {
    const token = JSON.parse(localStorage.getItem('token') || '');

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
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
};

async function parseJson(data: Response): Promise<ChatListResponseType> {
  try {
    const result: ChatListResponseType = await data.json();
    return result;
  } catch (ex) {}
  return new ChatListResponseType('Error parsing json');
}

export default useGetChat;

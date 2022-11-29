import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatListResponseSingleType } from '../types/chatlist-type';
import { LoginGuestResponseType } from '../types/guestlogin-type';
import { LoginResponseType } from '../types/login-type';
import { UserType } from '../types/user-type';

const usePostChat = () => {
  const sendChat = async (message: string): Promise<ChatListResponseSingleType> => {
    var result: ChatListResponseSingleType = new ChatListResponseSingleType("no data")

    try {
      const token = JSON.parse(localStorage.getItem('token') || '');
      
      const formData = new FormData();
      formData.append('msg', message)

      const response = await fetch(
        'https://cors-anywhere.herokuapp.com/https://api-teman-ngorte-wsph3rjooq-et.a.run.app/chatbot-user',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer '+token
          },
          body: formData,
        }
      );

      result = await response.json()
      return result

    } catch (error) {
      console.log(error);
    }

    return result
  };
  return {
    sendChat,
  };
};

export default usePostChat;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigation = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const authLogin = async (username: string, password: string) => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://chatbot-api-three.herokuapp.com/loginOrRegister',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );

      const result = await response.json();
      console.log(result);
      if (response.status >= 200 && response.status < 300) {
        localStorage.setItem('user', JSON.stringify(result));
        setLoading(false);
        navigation('/');
      } else {
        alert('Invalid username or password');
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return {
    authLogin,
    isLoading,
  };
};

export default useAuth;

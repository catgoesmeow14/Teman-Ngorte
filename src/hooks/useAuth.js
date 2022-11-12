import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [isLoading, setLoading] = useState(false);
  const navigation = useNavigate();

  const authLogin = async (username, password) => {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
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
      });

      const result = await response.json();
      if (response.status >= 200 && response.status < 300) {
        localStorage.setItem('user', JSON.stringify(result.data));
        setLoading(false);
        navigation('chat');
      } else {
        alert('Invalid username or password');
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    isLoading,
    authLogin,
  };
};

export default useAuth;

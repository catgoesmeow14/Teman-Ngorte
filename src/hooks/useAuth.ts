import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigation = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);

  const authLogin = async (username: string, password: string) => {
    try {
      setLoading(true);
      setDisable(true);
      const response = await fetch(
        'https://chatbot-api-three.herokuapp.com/login',
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
      if (response.status >= 200 && response.status < 300) {
        localStorage.setItem('user', JSON.stringify(result));
        setLoading(false);
        navigation('/');
      } else {
        alert('Invalid username or password');
        setLoading(false);
        setDisable(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return {
    authLogin,
    isLoading,
    disable,
    setDisable,
  };
};

export default useAuth;

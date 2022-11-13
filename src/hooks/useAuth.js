import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  // const [isLoading, setLoading] = useState(false);
  const navigation = useNavigate();

  const authLogin = async (username, password) => {
    // setLoading(true);
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

      // const response = await fetch('http://127.0.0.1:5000/loginOrRegister', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Accept: 'application/json',
      //     'Access-Control-Allow-Origin': '*',
      //   },
      //   body: JSON.stringify({
      //     username: username,
      //     password: password,
      //   }),
      // });

      const result = await response.json();
      console.log(result);
      if (response.status >= 200 && response.status < 300) {
        localStorage.setItem('user', JSON.stringify(result));
        // localStorage.setItem('token', JSON.stringify(result.token));
        navigation('chat');
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    authLogin,
  };
};

export default useAuth;
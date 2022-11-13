import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigation = useNavigate();

  const authLogin = async (username, password) => {
    try {
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
        },
      );

      const result = await response.json();
      console.log(result);
      if (response.status >= 200 && response.status < 300) {
        localStorage.setItem('user', JSON.stringify(result.data));
        localStorage.setItem('token', JSON.stringify(result.token));
        navigation('dashboard');
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

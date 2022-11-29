import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginResponseType } from '../types/login-response-type';

const usePostAuth = () => {
  const navigation = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);

  const authLogin = async (username: string, password: string) => {
    try {
      setLoading(true);
      setDisable(true);

      const formData = new FormData();
      formData.append('username', username)
      formData.append('password', password)

      const response = await fetch(
        'https://cors-anywhere.herokuapp.com/https://api-teman-ngorte-wsph3rjooq-et.a.run.app/login', // TODO : THIS IS A HACK FOR CORS STUFFS. NEED TO IMPLEMENT CORS ON BACKEND SIDE
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: formData,
        }
      );

      const result: LoginResponseType = await response.json();

      if (response.status >= 200 && response.status < 300) {
        localStorage.setItem('token', JSON.stringify(result.data.access_token));
        localStorage.setItem('user', JSON.stringify(result.data.data));
        setLoading(false);
        navigation('/');
      } else {
        alert(result.message);
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

export default usePostAuth;

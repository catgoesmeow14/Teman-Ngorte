import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginGuestResponseType } from '../types/guestlogin-type';
import { LoginResponseType } from '../types/login-type';
import { UserType } from '../types/user-type';

const usePostAuth = () => {
  const navigation = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);

  const authLogin = async (username: string, password: string, isGuest: boolean = false) => {
    try {
      setLoading(true);
      setDisable(true);
      
      const formData = new FormData();

      // TODO : THIS IS A HACK FOR CORS STUFFS. NEED TO IMPLEMENT CORS ON BACKEND SIDE
      var loginUrl = 'https://cors-anywhere.herokuapp.com/https://api-teman-ngorte-wsph3rjooq-et.a.run.app/login-guest'
      if(!isGuest){
        loginUrl = 'https://cors-anywhere.herokuapp.com/https://api-teman-ngorte-wsph3rjooq-et.a.run.app/login'

        formData.append('username', username)
        formData.append('password', password)
      }

      const response = await fetch(
        loginUrl,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: formData,
        }
      );

      if (response.status >= 200 && response.status < 300) {
        // We treat data from guest login api differently
        if(isGuest){
          const result: LoginGuestResponseType = await response.json();

          localStorage.setItem('token', JSON.stringify(result.data.access_token));
          localStorage.setItem('user', JSON.stringify(new UserType(0, result.data.username)));
        }else{
          const result: LoginResponseType = await response.json();

          localStorage.setItem('token', JSON.stringify(result.data.access_token));
          localStorage.setItem('user', JSON.stringify(new UserType(result.data.data.id, result.data.data.username)));
        }
        setLoading(false);
        navigation('/');
      } else {
        alert((await response.json())['message']);
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

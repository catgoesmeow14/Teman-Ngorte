import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  //hooks
  const [alertUsername, setAlertUsername] = useState('');
  const [alertPassword, setAlertPassword] = useState('');

  const { isLoading, authLogin, disable, setDisable } = useAuth();

  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const submitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.username.length <= 3) {
      setAlertUsername('Username must be more than 3 characters');
    } else if (input.password.length <= 3) {
      setAlertPassword('Password must be more than 3 characters');
    } else {
      authLogin(input.username, input.password);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isLoading) {
      setDisable(true);
    }

    if (input.username.length <= 3 || input.password.length <= 3) {
      setAlertUsername('');
      setAlertPassword('');
      setDisable(true);
    } else if (input.username === '' || input.password === '') {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [input, isLoading]);

  return (
    <div className="w-screen h-screen bg-gray-300 flex flex-col items-center">
      <div className="w-[70%] h-[70%] bg-white m-auto grid grid-cols-2 content-center px-20 drop-shadow-xl rounded-md">
        {/* Title */}
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-black font-bold text-6xl">
            Teman<div>Ngorte.</div>
          </h1>
        </div>

        {/* Form Login */}
        <form
          onSubmit={(e) => submitLogin(e)}
          className="w-full flex flex-col space-y-2"
        >
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full max-w-md"
            onChange={handleChange}
            name="username"
          />
          <p className="text-red-500">{alertUsername}</p>

          <input
            type="password"
            placeholder="********"
            className="input input-bordered w-full max-w-md"
            onChange={handleChange}
            name="password"
          />
          <p className="text-red-500">{alertPassword}</p>

          {/* Button Submit Login*/}
          <button
            disabled={disable}
            className="transition-all delay-100 duration-400 btn btn-primary max-w-md"
            type="submit"
          >
            {isLoading ? <Loading /> : 'Login/Register'}
          </button>

          {/* Button Submit Guest*/}
          <button
            // disabled={disable}
            className="transition-all delay-100 duration-400 btn bg-white max-w-md text-gray-600 hover:btn"
            type="button"
            onClick={() => console.log('You are logged in as a Guest')}
          >
            Login as Guest
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

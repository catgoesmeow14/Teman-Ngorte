import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  //hooks
  // const navigation = useNavigate();
  const [alertUsername, setAlertUsername] = useState('');
  const [alertPassword, setAlertPassword] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { authLogin } = useAuth();

  const submitLogin = (e) => {
    e.preventDefault();
    // navigation('chat');
    if (username.length <= 3) {
      setAlertUsername('Username must be more than 3 characters');
    } else if (password.length <= 3) {
      setAlertPassword('Password must be more than 3 characters');
    } else {
      authLogin(username, password);
    }
  };

  console.log(username, password);

  useEffect(() => {
    if (username.length <= 3 || password.length >= 3) {
      setAlertUsername();
      setAlertPassword();
    }
  }, [username, password]);

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
          className="w-full flex flex-col space-y-2">
          {/* <label className="text-xs font-medium">Username</label> */}
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full max-w-md"
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
          <p className="text-red-500">{alertUsername}</p>
          {/* <div className="flex flex-col space">
          <label className="text-xs font-medium">Password</label> */}
          <input
            type="password"
            placeholder="********"
            className="input input-bordered w-full max-w-md"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <p className="text-red-500">{alertPassword}</p>
          <button
            className="transition-all delay-100 duration-400 btn btn-primary max-w-md"
            type="submit">
            Login/Register
          </button>
          <button
            className="transition-all delay-100 duration-400 btn bg-white max-w-md text-gray-600 hover:btn"
            type="button"
            onClick={() => console.log('You are logged in as a Guest')}>
            Login as Guest
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

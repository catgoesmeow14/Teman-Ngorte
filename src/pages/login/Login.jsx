import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  //hooks
  const navigation = useNavigate();

  const submitLogin = (e) => {
    e.preventDefault();
    navigation('chat');
  };

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
          {/* <div className="flex flex-col space">
            <label className="text-xs font-medium">Username/Email</label> */}
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full max-w-sm"
          />
          {/* </div> */}
          {/* <div className="flex flex-col space">
          <label className="text-xs font-medium">Password</label> */}
          <input
            type="password"
            placeholder="********"
            className="input input-bordered w-full max-w-sm"
          />
          <button className="btn btn-primary max-w-sm" type="submit">
            Login/Register
          </button>
          <button
            className="btn bg-white max-w-sm text-gray-600 hover:btn"
            type="button"
            onClick={() => console.log('Uyey Km siapa')}>
            Login as Guest
          </button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default Login;

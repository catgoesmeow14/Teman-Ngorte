import React from 'react';

const Login = () => {
  return (
    <div className="w-screen h-screen bg-gray-300 flex flex-col items-center">
      <div className="w-[70%] h-[70%] bg-white m-auto flex flex-row">
        <h1>login bestie</h1>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

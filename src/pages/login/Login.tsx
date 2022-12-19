import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import usePostAuth from '../../hooks/usePostAuth';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login = () => {
  //hooks
  const [alertUsername, setAlertUsername] = useState('');
  const [alertPassword, setAlertPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { isLoading, authLogin, disable, setDisable } = usePostAuth();

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
      authLogin(input.username, input.password, false);
    }
  };

  const submitLoginGuest = () => {
    authLogin('', '', true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (input.username.length <= 3 || input.password.length <= 3) {
      setAlertUsername('');
      setAlertPassword('');
      setDisable(true);
    } else if (
      input.username === '' ||
      input.password === '' ||
      isLoading === true
    ) {
      setDisable(true);
      // setDisableGuest(true);
    } else {
      // setDisableGuest(false);
      setDisable(false);
    }
  }, [input, isLoading, setDisable]);

  return (
    <div className="w-screen h-screen bg-gray-300 flex flex-col items-center">
      <div className="w-[90%] sm:w-[70%] py-32 sm:py-48 bg-white m-auto flex flex-col sm:grid sm:grid-cols-2 sm:content-center justify-center px-10 sm:px-20 drop-shadow-xl rounded-md">
        {/* Logo */}
        <div className="w-full flex flex-col items-center justify-center mb-8 sm:mb-0 mt-0">
          <div className="w-[240px] sm:w-[180px] md:w-[240px] lg:w-[260px]">
            <img
              src="https://i.ibb.co/KVCpc8D/teman-ngorte-logo-02.png"
              alt="avatar"
            />
          </div>
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

          <label className="input-group">
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="********"
              className="input input-bordered w-full max-w-md"
              onChange={handleChange}
            />
            <span>
              <div className="tooltip tooltip-left" data-tip="Show Password">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>
            </span>
          </label>
          <p className="text-red-500">{alertPassword}</p>

          {/* Button Submit Login*/}
          <button
            disabled={disable}
            className="transition-all delay-100 duration-400 btn btn-primary max-w-md"
            type="submit"
          >
            {isLoading ? <Loading /> : 'Login'}
          </button>

          {/* Button Submit Guest*/}
          {isLoading ? null : (
            <button
              className="transition-all delay-100 duration-400 btn bg-white max-w-md text-gray-600 hover:btn"
              type="button"
              onClick={() => submitLoginGuest()}
            >
              Login as Guest
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;

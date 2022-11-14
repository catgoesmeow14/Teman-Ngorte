import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Dashboard = () => {
  const data = useFetch('https://chatbot-api-three.herokuapp.com/chat');
  console.log(data);

  const user = JSON.parse(localStorage.getItem('user'));

  console.log('user data log');
  console.log(user);

  const navigation = useNavigate();

  const navigateChat = async () => {
    await delay(2000);
    navigation('/chat');
    console.log('Masuk ke Chat sama Bot');
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <div className="w-screen h-screen bg-gray-300 flex flex-col items-center">
      <div className=" w-[70%] h-auto p-10 bg-white m-auto content-center px-20 drop-shadow-xl rounded-md">
        <h1 className="text-6xl text-center capitalize mb-10">
          Hi,{' '}
          <span
            className="transition-all delay-150 font-bold
           text-indigo-800 hover:text-sky-500 hover:text-8xl duration-400">
            {user.username}
          </span>
          ! Welcome bro😎
        </h1>

        <div className="flex justify-center">
          <button
            className="mt-7 transition ease-in-out delay-150 btn sm:btn-sm md:btn-md lg:btn-lg 
            text-white glass bg-blue-600 hover:-translate-y-2 
            hover:scale-110 transform-gpu hover:bg-blue-600 duration-400
            active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300"
            type="button"
            onClick={navigateChat}>
            Yuk Curhat!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import useGetChat from '../../hooks/useGetChat';
import AppBar from '../../components/AppBar';
import { UserType } from '../../types/user-type';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  const data = useGetChat();
  console.log(data);

  const user: UserType = JSON.parse(localStorage.getItem('user') || '');

  console.log('user data log');
  console.log(user);

  const navigation = useNavigate();

  const navigateChat = async () => {
    navigation('/chat');
    console.log('Masuk ke Chat sama Bot');
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | Teman Ngorte</title>
      </Helmet>
      <AppBar title="Dashboard" />
      <div className="w-screen h-screen bg-gray-300 flex flex-col items-center">
        <div className="w-[90%] sm:w-[70%] h-auto p-10 bg-white m-auto content-center px-15 drop-shadow-xl rounded-md">
          <div className="w-full flex flex-col items-center justify-center mt-12 sm:mt-4 md:mt-0 lg:mt-12 sm:mb-0">
            <div className="w-[240px] sm:w-[180px] md:w-[240px] lg:w-[260px]">
              <img
                src="https://i.ibb.co/KVCpc8D/teman-ngorte-logo-02.png"
                alt="avatar"
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center capitalize mb-10 mt-8 md:mt-4 lg:mt-8">
            Hi,{' '}
            <span className="transition-all delay-150 font-bold text-indigo-800 hover:text-sky-500 sm:hover:text-6xl md:hover:text-7xl lg:hover:text-8xl duration-400">
              {user.username}
            </span>
            ! Welcome 😇
          </h1>

          <div className="flex justify-center">
            <div className="flex flex-col">
              <button
                className="mt-2 sm:mt-4 md:mt-5 lg:mt-6 mb-12 sm:mb-4 lg:mb-12 md:mb-0 transition ease-in-out delay-150 btn sm:btn-sm md:btn-md lg:btn-lg 
            text-white glass bg-blue-600 hover:-translate-y-2 
            hover:scale-110 transform-gpu hover:bg-blue-600 duration-400
            active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300"
                type="button"
                onClick={navigateChat}
              >
                Yuk Curhat!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

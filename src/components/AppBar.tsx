import React, { FC, ReactNode } from 'react';
import { IoLogOut } from 'react-icons/io5';
import { logoutUser } from '../hooks/useLogout';

type Props = {
  backItem?: ReactNode;
  title?: string;
  anotherItem?: ReactNode;
};
const AppBar: FC<Props> = ({ backItem, title, anotherItem }) => {
  return (
    <header className="bg-white flex fixed z-50 w-screen px-2 py-4 transition-all duration-150 ease-in-out">
      <div className="flex flex-row w-full items-center justify-between">
        {backItem}
        <h1 className="ml-5 font-semibold text-2xl">{title}</h1>
        <button
          className="mr-7 transition ease-in-out delay-150 btn btn-sm sm:btn-sm md:btn-md lg:btn-md 
            text-white glass bg-rose-600 hover:-translate-y-1 
            hover:scale-110 transform-gpu hover:bg-rose-700 duration-400
            active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300"
          type="button"
          onClick={() => {
            if (window.confirm('Are you sure you wish to logout?')) {
              console.log('Berhasil logout');
              logOut();
            }
          }}
        >
          <IoLogOut
            className="ml-1"
            style={{ color: 'white', fontSize: '25px' }}
          />
        </button>
        {anotherItem}
      </div>
    </header>
  );
};

const logOut = async () => {
  logoutUser();
  localStorage.removeItem('token');
  window.location.reload();
};

export default AppBar;

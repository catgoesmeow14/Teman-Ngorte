import React from 'react';
import useFetch from '../../hooks/useFetch';
import BubbleChat from './BubbleChat';

// tes get method
const Chat = () => {
  const chatList = useFetch('https://chatbot-api-three.herokuapp.com/chat');
  console.log(chatList);

  const user = JSON.parse(localStorage.getItem('user'));

  console.log('user data log');
  console.log(user);

  return (
    <div className="w-screen h-screen bg-gray-200 flex flex-col items-center">
      <div className="bg-white m-auto h-[70%] w-[40%] flex flex-col drop-shadow-xl rounded-lg">
        <div className="bg-primary py-3 px-7 w-full flex flex-row items-center space-x-4 rounded-t-lg">
          <div className="avatar">
            <div className=" w-[80px] rounded-full">
              <img
                src="https://i.ibb.co/Dw3r0qc/Whats-App-Image-2022-11-14-at-16-46-46.jpg"
                alt="avatar"
              />
            </div>
          </div>
          <h1 className="font-bold text-4xl text-white capitalize">juwiii</h1>
        </div>
        <div className="w-full h-full px-7 py-4 flex flex-col justify-end">
          {/* People */}
          <BubbleChat
            from="self-start"
            text="Hai apakah kamu ingin menonton konser ENHYPEN?"
            color="bg-blue-300"
          />
          <BubbleChat
            from="self-end"
            text="Iyaa nih, tabunganku masih 5ribu🤩"
            color="bg-green-300"
          />
        </div>
        <form className="flex flex-row px-5 py-5 space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="input input-bordered w-full text-2xl"
          />
          <button type="button" className="btn btn-primary btn-circle">
            send ajah
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;

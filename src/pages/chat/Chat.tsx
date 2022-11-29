import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import BubbleChat from '../../components/BubbleChat';
import useFetch from '../../hooks/useFetch';
import { IoArrowBack, IoSend } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import AppBar from '../../components/AppBar';

const Chat = () => {
  const [input, setInput] = useState('');
  const chatList = useFetch('https://chatbot-api-three.herokuapp.com/chat');
  console.log(chatList);
  const ButtonStyle = { margin: '0px 7px' };
  // const iconStyles = { color: 'white' };

  const user = JSON.parse(localStorage.getItem('user') || '');

  const textAreaRef: any = useRef(null);
  const divRef: any = useRef(null);

  const navigation = useNavigate();

  const navigateDashboard = async () => {
    navigation(-1);
    console.log('Balik ke dashboard');
  };

  const resizeTextArea = () => {
    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
  };

  const divAutoHeight = () => {
    divRef.current.style.height = 'auto';
    divRef.current.style.height = divRef.current.scrollHeight + '%';
  };

  useEffect(() => {
    resizeTextArea();
    divAutoHeight();
  }, [input]);

  return (
    <>
      <AppBar title="Chatroom" />
      <div className="w-screen h-screen bg-gray-200 flex flex-col items-center py-24">
        <div
          ref={divRef}
          className="bg-white m-auto w-[80%] sm:w-[40%] flex flex-col drop-shadow-xl rounded-lg"
        >
          <div className="bg-primary py-3 px-3 w-full flex flex-row items-center space-x-4 rounded-t-lg">
            <button
              type="button"
              className="btn btn-circle btn-primary"
              onClick={navigateDashboard}
            >
              <IoArrowBack style={{ color: 'white', fontSize: '30px' }} />
            </button>

            <div className="avatar">
              <div className="w-[60px] sm:w-[40px] md:w-[60px] lg:w-[80px] rounded-full">
                <img
                  src="https://i.pinimg.com/564x/8c/b6/1f/8cb61f5c432e146e4b9aad26cc5effbb.jpg"
                  alt="avatar"
                />
              </div>
            </div>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white capitalize">
              TimpalBot
            </h1>
          </div>
          <div className="w-full h-full px-7 py-3 flex flex-col justify-end">
            {/* People */}
            <BubbleChat from="self-end" text="Hai" color="bg-blue-300" />
            <BubbleChat
              from="self-start"
              text="Hai, aku TimpalBot, salam kenal!😎"
              color="bg-green-300"
            />
            <BubbleChat
              from="self-end"
              text="Haloo TimpalBot, aku abis ditikung temen aku :("
              color="bg-blue-300"
            />
          </div>
          <form className="flex flex-row px-5 py-5 space-x-2 items-center">
            <textarea
              ref={textAreaRef}
              placeholder="Type your message..."
              className="input input-bordered resize-none max-h-36 w-full sm:text-md md:text-xl lg:text-2xl"
              value={input}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setInput(e.target.value)
              }
            />
            <button
              type="button"
              style={ButtonStyle}
              className="btn btn-circle btn-primary btn-md"
            >
              <IoSend style={{ color: 'white', fontSize: '23px' }} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chat;

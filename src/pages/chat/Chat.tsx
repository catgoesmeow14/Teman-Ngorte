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
      <div className="w-full h-screen bg-gray-200 flex flex-col items-center py-16">
        <div
          ref={divRef}
          className="bg-white m-auto max-h-full w-[90%] sm:w-[40%] flex flex-col drop-shadow-xl rounded-lg"
        >
          <div className="bg-primary py-2 sm:py-3 px-2 w-full flex flex-row items-center space-x-2 rounded-t-lg">
            <button
              type="button"
              className="btn btn-circle btn-primary"
              onClick={navigateDashboard}
            >
              <IoArrowBack style={{ color: 'white', fontSize: '25px' }} />
            </button>

            <div className="avatar">
              <div className="w-[40px] sm:w-[40px] md:w-[60px] lg:w-[80px] rounded-full">
                <img
                  src="https://i.pinimg.com/564x/e3/47/45/e34745532089ceb929ddea369a063c8d.jpg"
                  alt="avatar"
                />
              </div>
            </div>
            <h1 className="font-bold text-xl md:text-3xl lg:text-4xl text-white capitalize">
              TimpalBot
            </h1>
          </div>
          <div className="w-full overflow-auto scroll-smooth px-5 sm:px-7 py-3 flex flex-col">
            {/* People */}
            <BubbleChat from="self-end" text="Hai" />
            <BubbleChat
              from="self-start"
              text="Hai, aku TimpalBot, salam kenal!😎 Ayo drop curhatan kamu sekarang juga, kawan😉"
            />
            <BubbleChat
              from="self-end"
              text="Haloo TimpalBot, minta tolong bangettt marahin aku dong plis sekasar2nya sampe kena mental😭 aku pengen banget lepas dari spyltr karena capek bayarnya tiap bulan dan jadi gak bisa nabung, tapi selalu gagal terussss😭😭😭 Ini tagihan sampe udah 1M, aku harus apaaa😭😭😭"
            />
            <BubbleChat from="self-start" text="ASTAGA TOBAT SIS😱" />
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

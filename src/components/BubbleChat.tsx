import React, { FC } from 'react';

type Props = {
  // from: string;
  text: string;
  time: string;
  isBot: boolean;
  // color: string;
};

const BubbleChat: FC<Props> = ({ text, time, isBot }) => {
  if (isBot) {
    return (
      <>
        {/* Start */}
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-[40px] md:w-[40px] lg:w-[50px] rounded-full">
              <img
                src="https://i.ibb.co/WgDDM7n/57cda57be47bc2718e117f348757ff5c-Cropped.jpg"
                alt="avatar"
              />
            </div>
          </div>
          <div className="chat-header">{'TimpalBot' + '  '}</div>
          <div className="chat-bubble chat-bubble-info">
            <p className="sm:text-md lg:text-xl break-words">{text} </p>
          </div>
          <div className="chat-footer">
            <time className="text-xs opacity-50">{time}</time>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {/* End */}
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-[40px] md:w-[40px] lg:w-[50px] rounded-full">
            <img
              src="https://i.pinimg.com/564x/b5/c0/19/b5c0191cbb9b7eed106de7230f960539.jpg"
              alt="avatar"
            />
          </div>
        </div>
        <div className="chat-header">{'You' + '  '}</div>
        <div className="chat-bubble chat-bubble-success">
          <p className="sm:text-md lg:text-xl break-words">{text} </p>
        </div>
        <div className="chat-footer">
          <time className="text-xs opacity-50">{time}</time>
        </div>
      </div>
    </>
  );
};

export default BubbleChat;

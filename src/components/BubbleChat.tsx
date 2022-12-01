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
                src="https://i.pinimg.com/564x/b7/d2/d3/b7d2d3dbfd736a344cf3620ec484a883.jpg"
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
              src="https://i.pinimg.com/564x/2f/94/bb/2f94bb74dc62d6fe7f0865ce1afd5199.jpg"
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

import React from 'react';

const BubbleChat = ({ from, text, color }) => {
  const reverse =
    from === 'self-start' ? (
      <>
        <div className="avatar">
          <div className="w-[80px] rounded-full">
            <img
              // src="https://i.ibb.co/Dw3r0qc/Whats-App-Image-2022-11-14-at-16-46-46.jpg"
              src="https://i.pinimg.com/564x/8c/b6/1f/8cb61f5c432e146e4b9aad26cc5effbb.jpg"
              alt="avatar"
            />
          </div>
        </div>
        <div
          className={` ${color} max-w-md px-3 py-3 rounded-r-lg rounded-tl-lg`}>
          <p className=" font-medium text-2xl break-words">{text}</p>
        </div>
      </>
    ) : (
      <>
        <div
          className={` ${color} max-w-md px-3 py-3 rounded-l-lg rounded-tr-lg`}>
          <p className=" font-medium text-2xl break-words">{text}</p>
        </div>
        <div className="avatar">
          <div className="w-[80px] rounded-full">
            <img
              src="https://i.pinimg.com/564x/e7/e3/ca/e7e3caaa114b8aff70f691940366c381.jpg"
              alt="avatar"
            />
          </div>
        </div>
      </>
    );
  return (
    <div className={`${from} flex flex-row items-center space-x-2`}>
      {reverse}
    </div>
  );
};

export default BubbleChat;

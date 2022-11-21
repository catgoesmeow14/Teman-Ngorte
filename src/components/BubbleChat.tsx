import React, { FC } from 'react';

type Props = {
  from: string;
  text: string;
  color: string;
};

const BubbleChat: FC<Props> = ({ from, text, color }) => {
  const reverse =
    from === 'self-start' ? (
      <>
        <div className="avatar">
          <div className="sm:w-[40px] md:w-[60px] lg:w-[80px] rounded-full">
            <img
              // src="https://i.ibb.co/Dw3r0qc/Whats-App-Image-2022-11-14-at-16-46-46.jpg"
              src="https://i.pinimg.com/564x/8c/b6/1f/8cb61f5c432e146e4b9aad26cc5effbb.jpg"
              alt="avatar"
            />
          </div>
        </div>
        <div
          // sm:btn-sm md:btn-md lg:btn-lg
          className={` ${color} sm:max-w-xs md:max-w-sm lg:max-w-md sm:max-h-15 md:max-h-28 lg:max-h-40 px-3 py-3 rounded-r-lg rounded-tl-lg`}
        >
          <p className=" font-medium sm:text-md md:text-xl lg:text-2xl break-words">
            {text}
          </p>
        </div>
      </>
    ) : (
      <>
        <div
          className={` ${color} sm:max-w-xs md:max-w-sm lg:max-w-md sm:max-h-15 md:max-h-28 lg:max-h-40 sm:mt-3 md:mt-3 px-3 py-3 rounded-l-lg rounded-tr-lg`}
        >
          <p className=" font-medium sm:text-md md:text-xl lg:text-2xl break-words">
            {text}
          </p>
        </div>
        <div className="avatar">
          <div className="sm:w-[40px] md:w-[60px] lg:w-[80px] rounded-full">
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

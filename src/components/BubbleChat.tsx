import React, { FC } from 'react';

type Props = {
  from: string;
  text: string;
  // color: string;
};

const BubbleChat: FC<Props> = ({ from, text }) => {
  const reverse =
    from === 'self-start' ? (
      <>
        <div className="avatar">
          <div className="w-[40px] sm:w-[40px] md:w-[60px] lg:w-[80px] rounded-full">
            <img
              // src="https://i.pinimg.com/564x/8c/b6/1f/8cb61f5c432e146e4b9aad26cc5effbb.jpg"
              src="https://i.pinimg.com/564x/e3/47/45/e34745532089ceb929ddea369a063c8d.jpg"
              alt="avatar"
            />
          </div>
        </div>
        <div
          className={`bg-green-300 max-w-[14rem] sm:max-w-xs md:max-w-sm lg:max-w-md mt-4 sm:mt-3 px-3 py-3 rounded-r-lg rounded-tl-lg`}
        >
          <p className="font-medium sm:text-md md:text-xl lg:text-2xl break-words">
            {text}
          </p>
        </div>
      </>
    ) : (
      <>
        <div
          className={`bg-blue-300 max-w-[14rem] sm:max-w-xs md:max-w-sm lg:max-w-md mt-4 sm:mt-3 px-3 py-3 rounded-l-lg rounded-tr-lg`}
        >
          <p className=" font-medium sm:text-md md:text-xl lg:text-2xl break-words">
            {text}
          </p>
        </div>
        <div className="avatar">
          <div className="w-[40px] sm:w-[40px] md:w-[60px] lg:w-[80px] rounded-full">
            <img
              src="https://i.pinimg.com/564x/ba/37/ce/ba37cea80a94a56e24cfbcb4aa15ad28.jpg"
              // src="https://i.ibb.co/Dw3r0qc/Whats-App-Image-2022-11-14-at-16-46-46.jpg"
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

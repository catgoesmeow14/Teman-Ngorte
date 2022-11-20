import React from 'react';

const Loading = () => {
  return (
    <div className="loader-dots block relative w-16 h-5 mt-2">
      <div className="absolute top-0 mt-1 w-2 h-2 rounded-full bg-blue-300" />
      <div className="absolute top-0 mt-1 w-2 h-2 rounded-full bg-green-500" />
      <div className="absolute top-0 mt-1 w-2 h-2 rounded-full bg-purple-500" />
      <div className="absolute top-0 mt-1 w-2 h-2 rounded-full bg-yellow-500" />
    </div>
  );
};

export default Loading;

import React from 'react';
import useFetch from '../../hooks/useFetch';

// tes get method
const Chat = () => {
  const data = useFetch('https://jsonplaceholder.typicode.com/posts');

  console.log(data);

  return (
    <div className="h-screen w-screen">
      {data.map((item) => (
        <div className="p-20">
          <p className=" font-medium">{item.title}</p>
          <p className=" font-medium">{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Chat;

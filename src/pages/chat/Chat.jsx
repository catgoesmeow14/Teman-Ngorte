import React from 'react';
import useFetch from '../../hooks/useFetch';

// tes get method
const Chat = () => {
  const data = useFetch('https://chatbot-api-three.herokuapp.com/chat');
  console.log(data);

  const user = JSON.parse(localStorage.getItem('user'));

  console.log('user data log');
  console.log(user);

  return (
    <div className="h-screen w-screen">
      {
        <h1 className="text-6xl text-center capitalize whitespace-pre-line">
          {' '}
          Hi, <a className="font-bold hover:text-sky-500">{user.username}</a>!
          Welcome bro😎
        </h1>
      }
      {data.map((item) => (
        <div className="p-5">
          {/* <p className=" font-medium">Username : {item.username}</p>
          <p className=" font-medium">Password : {item.password}</p> */}
          <p className=" font-medium">No : {item.id}</p>
          <p className=" font-medium">Title : {item.title}</p>
          <p className=" font-medium">Body : {item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Chat;

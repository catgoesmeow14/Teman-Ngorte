import React, {
  ChangeEvent,
  Fragment,
  useEffect,
  useRef,
  useState,
} from 'react';
import BubbleChat from '../../components/BubbleChat';
import useGetChat from '../../hooks/useGetChat';
import { IoArrowBack, IoSend } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import usePostChat from '../../hooks/usePostChat';
import { ChatListDataType } from '../../types/chatlist-type';
import { getChatbubbleTime } from '../../utils/timeUtil';
import RoundLoading from '../../components/RoundLoading';
import { Helmet } from 'react-helmet';

const Chat = () => {
  const [input, setInput] = useState('');
  // const [chatListData, setChatListData] = useState<Array<ChatListDataType>>([])
  const { data, loading } = useGetChat();
  const postChat = usePostChat();

  var chatListData: ChatListDataType[] | undefined = data.data?.data_message;
  const ButtonStyle = { margin: '0px 7px' };
  // const iconStyles = { color: 'white' };

  const user = JSON.parse(localStorage.getItem('user') || '');

  const textAreaRef: any = useRef(null);
  const divRef: any = useRef(null);

  const navigation = useNavigate();

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      block: 'nearest',
      inline: 'center',
      behavior: 'smooth',
    });
  };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [chatListData]);

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

  const submitMessage = async () => {
    chatListData?.push(
      new ChatListDataType(
        new Date().getUTCMilliseconds(),
        '',
        '',
        input,
        new Date().toUTCString()
      )
    );
    setInput(' ');

    const result = await postChat.sendChat(input);

    if (result.data != null) {
      chatListData?.pop();
      chatListData?.push(result.data.data_message);
      setInput('');
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatListData]);

  useEffect(() => {
    resizeTextArea();
    divAutoHeight();
    scrollToBottom();
  }, [input]);

  return (
    <>
      <Helmet>
        <title>Chatroom | Teman Ngorte</title>
      </Helmet>
      <div className="w-full h-screen bg-gray-200 flex flex-col items-center py-6">
        {loading ? (
          <div className="flex h-screen">
            <div className="m-auto flex flex-col space-y-5">
              <RoundLoading />
            </div>
          </div>
        ) : (
          <div
            ref={divRef}
            className="bg-white max-h-full m-auto w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] flex flex-col drop-shadow-xl rounded-lg"
          >
            <div className="bg-primary py-2 sm:py-3 px-2 w-full flex flex-row items-center space-x-2 rounded-t-lg">
              <div className="tooltip tooltip-info" data-tip="Back">
                <button
                  type="button"
                  className="btn btn-circle btn-primary"
                  onClick={navigateDashboard}
                >
                  <IoArrowBack style={{ color: 'white', fontSize: '25px' }} />
                </button>
              </div>

              <div className="avatar">
                <div className="w-[40px] md:w-[40px] lg:w-[50px] rounded-full">
                  <img
                    src="https://i.ibb.co/WgDDM7n/57cda57be47bc2718e117f348757ff5c-Cropped.jpg"
                    alt="avatar"
                  />
                </div>
              </div>
              <h1 className="font-bold text-xl lg:text-2xl text-white capitalize">
                TimpalBot
              </h1>
            </div>
            <div className="w-full overflow-auto scroll-smooth px-5 sm:px-7 py-5 flex flex-col">
              {chatListData?.map((element) => {
                return (
                  <React.Fragment key={element.id}>
                    {element.user_message !== '' ? (
                      <BubbleChat
                        isBot={false}
                        text={element.user_message}
                        time={getChatbubbleTime(element.user_timestamp)}
                      />
                    ) : (
                      <></>
                    )}
                    {element.bot_response !== '' ? (
                      <BubbleChat
                        isBot={true}
                        text={element.bot_response}
                        time={getChatbubbleTime(element.bot_timestamp)}
                      />
                    ) : (
                      <></>
                    )}{' '}
                  </React.Fragment>
                );
              })}
              <div ref={messagesEndRef} />
            </div>
            <form className="flex flex-row px-5 py-4 mb-3 space-x-2 items-center">
              <textarea
                ref={textAreaRef}
                placeholder="Type your message..."
                className="input input-bordered resize-none max-h-36 w-full sm:text-md lg:text-xl"
                value={input}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setInput(e.target.value)
                }
              />
              <div className="tooltip tooltip-info" data-tip="Send">
                <button
                  type="button"
                  style={ButtonStyle}
                  className="btn btn-circle btn-primary btn-md"
                  onClick={() => submitMessage()}
                >
                  <IoSend style={{ color: 'white', fontSize: '23px' }} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Chat;

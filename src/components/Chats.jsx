import React, { useRef, useState } from "react";

const Chats = () => {

  const [message,setMessage] = useState([
    {
      content: "hello",
      sender: "Ayush",
      time : "10:30",
      user : true,
    },
    {
      content: "hello there i am shubham nandi i really like chating with you",
      sender: "Shubham",
      time : "10:36",
      user : true,
    },
    {
      content: "hello",
      sender: "Ayush",
      time : "10:30",
      user : false,
    },
    {
      content: "hello there i am shubham nandi i really like chating with you",
      sender: "Shubham",
      time : "10:36",
      user : true,
    },
    {
      content: "hello",
      sender: "Ayush",
      time : "10:30",
      user : true,
    },
    {
      content: "hello there i am shubham nandi i really like chating with you",
      sender: "Shubham",
      time : "10:36",
      user : false,
    },
    {
      content: "hello",
      sender: "Ayush",
      time : "10:30",
      user : true,
    },
    {
      content: "hello there i am shubham nandi i really like chating with you",
      sender: "Shubham",
      time : "10:36",
      user : false,
    },{
      content: "hello",
      sender: "Ayush",
      time : "10:30",
      user : false,
    },
    {
      content: "hello there i am shubham nandi i really like chating with you",
      sender: "Shubham",
      time : "10:36",
      user : true,
    },

  ]);
  const [input,setInput] = useState("");
  const [stompClient,setStompClient] = useState(null)
  const [roomId,setRoomId] = useState("")
  const inputRef = useRef(null)
  const chatBoxRef = useRef(null)


  return (
    <div className="bg-[#9ea4ad] min-h-screen flex flex-col items-center overflow-hidden">
      {/* Header */}
      <header className="flex justify-between fixed top-0 items-center py-4 px-8 bg-[#213555] text-neutral-200 w-full max-w-4xl z-10">
        <div className="roomIcon flex gap-3 items-center">
          <div className="icon bg-gray-500 rounded-full p-2 text-sm text-white">RN</div>
          <div className="roomName font-bold text-lg">Room Name</div>
        </div>
        <div className="roomID text-sm">Room ID: 12345</div>
        <button className="relative flex items-center px-4 py-2 bg-indigo-500 rounded-md text-white transition-all hover:bg-indigo-600">
          Leave Room
        </button>
      </header>

      {/* Chat Container */}
      <div className="messageContainer flex-grow overflow-y-auto bg-[#3E5879] w-full max-w-4xl px-4 py-[5rem]">
        <div className="flex flex-col gap-6">
          {/* Sample Chat Bubbles */}
          {message.map((message,index)=>(
            <div key={index}>
          <ChatBubble  sender={message.sender} time={message.time} message={message.content} isLeft={message.user} />
          </div>
          ))}
          </div>
      </div>

      {/* Input Section */}
      <div className="bg-neutral-300 py-3 px-8 border-t border-gray-300 fixed bottom-0 w-full max-w-4xl">
        <form className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Enter message..."
            className="flex-grow bg-white rounded-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg transition"
          />
          <button
            type="submit"
            className="bg-[#3E5879] hover:bg-[rgb(108,133,164)] text-white px-6 py-3 rounded-full transition-all shadow-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

// Chat Bubble Component for reusability
const ChatBubble = ({ sender, time, message, isLeft }) => (
  <div className={`flex items-start gap-3 ${isLeft ? "" : "justify-end"}`}>
    {isLeft && (
      <img src={"https://avatar.iran.liara.run/public"} className="rounded-full w-10 h-10 flex items-center justify-center"/>
    )}
    <div className={`flex flex-col ${isLeft ? "items-start" : "items-end" }`}>
      <div className={`flex items-center gap-2 ${isLeft ? "" : "justify-end"}`}>
        <span className={`text-sm font-semibold ${isLeft ? "text-[#F5EFE7]" : "text-gray-100"}`}>{sender}</span>
        <span className="text-xs text-gray-300">{time}</span>
      </div>
      <div className={`rounded-lg px-4 py-2 max-w-[80%] ${isLeft ? "bg-[#F5EFE7]" : "bg-[#D8C4B6]"}`}>
        <p className={`text-sm ${isLeft ? "text-gray-900" : "text-neutral-800"}`}>{message}</p>
      </div>
    </div>
    {!isLeft && (
      <img src={"https://avatar.iran.liara.run/public"} className="rounded-full w-10 h-10 flex items-center justify-center"/>
    )}
  </div>
);

export default Chats;

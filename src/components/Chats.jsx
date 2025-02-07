import React from "react";

const Chats = () => {
  return (
    <div className="bg-[#9ea4ad] min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-8 bg-[#213555] text-neutral-200 w-full max-w-4xl">
        <div className="roomIcon flex gap-3 items-center">
          <div className="icon bg-gray-500 rounded-full p-2 text-sm text-white">RN</div>
          <div className="roomName font-bold text-lg">Room Name</div>
        </div>
        <div className="roomID text-sm">Room ID: 12345</div>
        <button className="relative flex items-center px-4 py-2 bg-indigo-500 rounded-md text-white transition-all hover:bg-indigo-600">
          <span className="relative z-10">Leave Room</span>
        </button>
      </header>

      {/* Chat Container */}
      <div className="flex-grow overflow-y-auto bg-gradient-to-t bg-[#3E5879] w-full max-w-4xl px-4 py-6">
        <div className="flex flex-col gap-6">
          {/* Chat Bubble - Left */}
          <div className="flex items-start gap-3">
            <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold text-white">
              A
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-[#F5EFE7] font-semibold text-sm">Alice</span>
                <span className="text-[#F5EFE7] text-xs">10:30 AM</span>
              </div>
              <div className=" bg-[#F5EFE7] rounded-lg px-4 py-2 max-w-[80%]">
                <p className="text-gray-900 text-sm">Hey, how are you?</p>
              </div>
            </div>
          </div>

          {/* Chat Bubble - Right */}
          <div className="flex items-start gap-3 justify-end">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2">
                <span className="text-gray-300 text-xs">10:32 AM</span>
                <span className="text-gray-100 font-semibold text-sm">You</span>
              </div>
              <div className="bg-[#D8C4B6] rounded-lg px-4 py-2 max-w-[80%]">
                <p className="text-neutral-800 text-sm">I'm good, thanks! How about you?</p>
              </div>
            </div>
            <div className="bg-gray-500 rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold text-white">
              Y
            </div>
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="bg-neutral-300 py-4 px-8 border-t border-gray-300 w-full max-w-4xl">
        <form className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Enter message..."
            className="flex-grow bg-white rounded-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xl transition"
          />
          <button
            type="submit"
            className=" bg-[#3E5879] hover:bg-[rgb(108,133,164)] text-white px-6 py-3 rounded-full transition-all shadow-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chats;

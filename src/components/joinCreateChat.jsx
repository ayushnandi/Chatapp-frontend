import React from 'react';

const JoinCreateChat = () => {
  return (
    <div className='flex items-center justify-center bg-[#e8e8e8] h-screen'>
    <div className="flex flex-col gap-4  bg-white text-center text-black text-sm m-12 w-96 rounded-2xl font-sans p-6">
      <div className="flex flex-col">
        <label className='p-[10px]'>Joining User Id</label>
        <div className="rounded-lg h-12 flex items-center pl-2.5 border border-gray-300">
          <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
          </svg>
          <input
            type="text"
            className="ml-2.5 rounded-lg w-full h-full focus:outline-none"
            placeholder="Enter your User ID"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className='pb-[10px]'>Room ID</label>
        <div className="rounded-lg h-12 flex items-center pl-2.5 border border-gray-300">
          <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
            <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
          </svg>
          <input
            type="password"
            className="ml-2.5 rounded-lg w-full h-full focus:outline-none"
            placeholder="Enter your Room ID"
          />
        </div>
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <label>Remember me</label>
        </div>
      </div>

      <button className="bg-neutral-900 text-white text-base font-medium rounded-lg h-12 w-full hover:bg-neutral-800 transition-all duration-300">
        Join Room
      </button>
      <div className="text-center text-sm">
        Don't have an Room ?{' '}
      </div>

      <div className="text-center text-sm my-4">Or Create</div>

      <div className="flex flex-row gap-4">
        <button className="w-full h-12 rounded-lg flex justify-center items-center font-medium gap-2.5 bg-white border border-gray-300 hover:bg-neutral-200 transition-all duration-300">
          
          Create Room
        </button>
        <button className="w-full h-12 rounded-lg flex justify-center items-center font-medium gap-2.5 bg-white border border-gray-300 hover:bg-neutral-200 transition-all duration-300">
          Check Availablity
        </button>
      </div>
    </div>
    </div>
  );
};

export default JoinCreateChat;

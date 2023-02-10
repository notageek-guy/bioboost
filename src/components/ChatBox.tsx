import React, { useState } from "react";

interface ChatI {
  memoInp: string;
  handleInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  generate: () => void;
  loading: boolean;
}
export default function ChatBox({
  memoInp,
  handleInput,
  generate,
  loading,
}: ChatI) {
  return (
    <div className="">
      <p className="text-white text-center text-2xl font-bold leading-relaxed">
        <span className="text-blue-500">Copy your current bio</span>
        <span className="text-white"> or write a new one about yourself</span>
      </p>
      <div className="mt-4">
        <textarea
          value={memoInp}
          onChange={handleInput}
          className="w-full h-40 p-4 rounded-md bg-gray-700 text-white"
          placeholder="Write your bio here 
          eg. Portfolio, Skills, Experience, etc.
          "
        ></textarea>
        <button
          onClick={generate}
          className="bg-blue-500
             w-full center
             
        hover:bg-blue-600 text-white font-bold px-6 py-2 rounded-md shadow-md flex items-center justify-center gap-2 mt-4"
        >
          <span>{loading ? "Loading..." : "Generate"}</span>
        </button>
      </div>
    </div>
  );
}

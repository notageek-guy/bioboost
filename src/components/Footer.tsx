import React from "react";
import { IoLogoVercel } from "react-icons/io5";
export default function Footer() {
  return (
    <div className="fixed bottom-0  right-16    py-4">
      <button
        className="bg-blue-500
      hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-md shadow-md flex items-center gap-2 "
      >
        <IoLogoVercel size={20} />
        <span>Powered by Vercel</span>
      </button>
    </div>
  );
}

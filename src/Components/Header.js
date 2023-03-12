import React from "react";
import Logo from "../chat.svg";

import { auth } from "../firebase";

export default function Header() {
  return (
    <div className="w-full h-16 bg-slate-800 flex items-center justify-center">
      <div className="w-11/12 flex justify-between items-center">
        <div className="flex justify-center items-center">
          <img src={Logo} alt="Kirim pesan!" width={40} />
          <h3 className="text-xl font-semibold cursor-default">Kirim pesan!</h3>
        </div>
        <button
          className="hover:text-slate-300 hover:bg-slate-700 transition-colors duration-300 py-2 px-4 bg-slate-600 rounded-md"
          onClick={() => auth.signOut()}
        >
          Keluar
        </button>
      </div>
    </div>
  );
}

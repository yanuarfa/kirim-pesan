import React, { useState } from "react";

import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function SendMessage({ scroll }) {
  const [message, setMessages] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message === "") return;
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "pesan"), {
      text: message,
      name: displayName,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });
    setMessages("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form
      onSubmit={sendMessage}
      autoComplete="off"
      className="w-full bg-slate-800 h-[10vh] fixed bottom-0 max-w-[728px] flex items-center justify-center"
    >
      <div className="w-11/12 flex justify-between">
        <input
          type="text"
          placeholder="Pesan"
          value={message}
          onChange={(e) => setMessages(e.target.value)}
          className="w-[75%] p-2 rounded-md text-slate-900 outline-none border-none"
        />
        <button
          type="submit"
          className="w-[24%] bg-slate-500 text-slate-50 hover:bg-slate-700 transition-colors duration-300 py-2 px-4 rounded-md"
        >
          Kirim
        </button>
      </div>
    </form>
  );
}

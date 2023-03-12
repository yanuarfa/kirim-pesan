import React, { useRef, useEffect, useState } from "react";
import Bubbles from "./Bubbles";

import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import SendMessage from "./SendMessage";

export default function ChatRoom() {
  const dummy = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const callingData = query(collection(db, "pesan"), orderBy("createdAt"));
    const unsub = onSnapshot(callingData, (q) => {
      let messages = [];
      q.forEach((msg) => {
        messages.push({ ...msg.data(), id: msg.id });
      });

      setMessages(messages);
    });
    dummy.current.scrollIntoView({ behavior: "smooth" });
    return () => unsub();
  }, []);

  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="w-11/12 flex justify-between items-center">
        <main className="flex flex-col w-full">
          {messages &&
            messages.map((mes) => {
              return <Bubbles key={mes.id} message={mes} />;
            })}
          <span ref={dummy}></span>
        </main>
      </div>
      <SendMessage scroll={dummy} />
    </div>
  );
}

import React from "react";
import moment from "moment/moment";

import { auth } from "../firebase";

const styles = {
  sent: `flex-row-reverse text-end float-right self-start w-full`,
  received: `text-black float-left`,
  container: `flex my-2`,
  selfEnd: `text-xs self-end`,
  selfStart: `text-xs self-start`,
};

export default function Bubbles({ message }) {
  const { text, name, uid, photoURL, createdAt } = message;
  const messageClass =
    uid === auth.currentUser.uid ? `${styles.sent}` : `${styles.received}`;

  const timeStamp =
    uid === auth.currentUser.uid ? `${styles.selfStart}` : `${styles.selfEnd}`;

  return (
    <div className={`${styles.container} ${messageClass}`}>
      <img src={photoURL} alt={name} className="w-10 h-10 rounded-full mt-4" />
      <div className="flex shadow-xl m-4 py-2 px-3 rounded-md flex-col bg-slate-700">
        <p className="text-white text-xs font-semibold">{name}</p>
        <p className="my-1">{text}</p>
        <p className={`${timeStamp}`}>
          {createdAt
            ? moment.unix(createdAt.seconds).format("HH:mm A")
            : new Date().toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
        </p>
      </div>
    </div>
  );
}

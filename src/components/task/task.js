import React from "react";

export default function Task({ text }) {
  return (
    <div className="task">
      <li className="taskItem">{text}</li>
      <button className="doneBtn">Done</button>
      <button className="delBtn">Delete</button>
    </div>
  );
}

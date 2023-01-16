import React from "react";

export default function Task(props) {
  return (
    <div className="task">
      <li className="task-item"></li>
      <button className="doneBtn">Done</button>
      <button className="delBtn">Delete</button>
    </div>
  );
}

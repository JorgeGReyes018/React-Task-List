import React from "react";

export default function Task({ text, task, setTasks, tasks }) {
  const delHandler = () => {
    setTasks(tasks.filter((el) => el.id !== task.id));
  };
  return (
    <div className="task">
      <li className="taskItem">{text}</li>
      <button className="doneBtn">Done</button>
      <button onClick={delHandler} className="delBtn">
        Delete
      </button>
    </div>
  );
}

import React from "react";

export default function Task({ text, task, setTasks, tasks }) {
  const delHandler = () => {
    setTasks(tasks.filter((el) => el.id !== task.id));
  };
  const doneHandler = () => {
    setTasks(
      tasks.map((item) => {
        if (item.id === task.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="task">
      <li className="taskItem">{text}</li>
      <button onClick={doneHandler} className="doneBtn">
        Done
      </button>
      <button onClick={delHandler} className="delBtn">
        Delete
      </button>
    </div>
  );
}

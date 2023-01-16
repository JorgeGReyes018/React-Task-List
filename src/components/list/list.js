import React from "react";
import Task from "../task/task";

export default function List({ tasks }) {
  return (
    <div>
      <ul className="task-list">
        {tasks.map((task) => (
          <Task text={task.text} key={task.id} />
        ))}
      </ul>
    </div>
  );
}

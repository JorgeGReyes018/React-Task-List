import React from "react";
import Task from "../task/task";

export default function List(props) {
  return (
    <div>
      <ul className="task-list">
        {props.tasks.map((task) => (
          <Task key={task.id} text={task.text} id={task.id} />
        ))}
      </ul>
    </div>
  );
}

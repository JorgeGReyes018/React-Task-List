import React from "react";
import Task from "../task/task";

export default function List(props) {
  return (
    <div>
      <ul className="task-list">
        <Task />
      </ul>
    </div>
  );
}

import React from "react";
import Task from "../task/task";
import "./list.css";

export default function List({ setTasks, tasks, filteredTasks }) {
  return (
    <div className="listPage">
      <div className="listBox">
        <ul className="task-list">
          {filteredTasks.map((task) => (
            <Task
              setTasks={setTasks}
              task={task}
              tasks={tasks}
              text={task.text}
              key={task.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

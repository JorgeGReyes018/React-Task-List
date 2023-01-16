import React from "react";
import Task from "../task/task";

export default function List({ setTasks, tasks }) {
  return (
    <div>
      <ul className="task-list">
        {tasks.map((task) => (
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
  );
}

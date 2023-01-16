import React from "react";
import Task from "../task/task";

export default function List({ setTasks, tasks, filteredTasks }) {
  return (
    <div>
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
  );
}

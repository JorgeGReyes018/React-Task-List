import React from "react";
import "./form.css";

export default function Form(props) {
  return (
    <form action="#" method="GET">
      <h1>New Task</h1>
      <input className="inputTask" type="text" />
      <div>
        <button className="addTaskBtn" type="submit">
          Add Task
        </button>
      </div>
      <div className="select">
        <select name="todos" class="todo-filter">
          <option value="all">All Tasks</option>
          <option value="completed">Completed Tasks</option>
          <option value="incomplete">Incomplete Tasks</option>
        </select>
      </div>
    </form>
  );
}

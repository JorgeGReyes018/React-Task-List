import React from "react";
import "./form.css";

export default function Form(props) {
  const inputTextHandler = (ev) => {
    props.setInputText(e.target.value);
  };

  return (
    <form action="#" method="GET">
      <h1>New Task</h1>
      <input onChange={inputTextHandler} className="inputTask" type="text" />
      <div>
        <button className="addTaskBtn" type="submit">
          Add Task
        </button>
      </div>
      <div className="select">
        <select name="todos" className="todo-filter">
          <option value="all">All Tasks</option>
          <option value="completed">Completed Tasks</option>
          <option value="incomplete">Incomplete Tasks</option>
        </select>
      </div>
    </form>
  );
}

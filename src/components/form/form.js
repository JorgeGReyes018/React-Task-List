import React from "react";
import "./form.css";

export default function Form(props) {
  const inputTextHandler = (ev) => {
    props.setInputText(ev.target.value);
  };
  const submitTaskHandler = (ev) => {
    ev.preventDefault();
    props.setTasks([
      ...props.tasks,
      { text: props.inputText, completed: false, id: Math.random() * 100 },
    ]);
    props.setInputText("");
  };

  return (
    <form action="#" method="GET">
      <h1>New Task</h1>
      <input
        value={props.inputText}
        onChange={inputTextHandler}
        className="inputTask"
        type="text"
      />
      <div>
        <button
          onClick={submitTaskHandler}
          className="addTaskBtn"
          type="submit"
        >
          Add Task
        </button>
      </div>
      <div className="select">
        <select name="tasks" className="task-filter">
          <option value="all">All Tasks</option>
          <option value="completed">Completed Tasks</option>
          <option value="incomplete">Incomplete Tasks</option>
        </select>
      </div>
    </form>
  );
}

import React from "react";
import "./form.css";

export default function Form({ inputText, setInputText, tasks, setTasks }) {
  const inputTextHandler = (ev) => {
    console.log(ev.target.value);
    setInputText(ev.target.value);
  };
  const submitTaskHandler = (ev) => {
    ev.preventDefault();
    setTasks([
      ...tasks,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (ev) => {
    console.log(ev.target.value);
  };
  return (
    <form action="#" method="GET">
      <h1>New Task</h1>
      <input
        value={inputText}
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
        <select onChange={statusHandler} name="tasks" className="tasks-filter">
          <option value="all">All Tasks</option>
          <option value="completed">Completed Tasks</option>
          <option value="incomplete">Incomplete Tasks</option>
        </select>
      </div>
    </form>
  );
}

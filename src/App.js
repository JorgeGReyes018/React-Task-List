import React from "react";
import "./App.css";

import Form from "./components/form/form";
import List from "./components/list/list";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [tasks, setTasks] = React.useState([]);
  const [status, setStatus] = React.useState("all");
  const [filteredTasks, setFilteredTasks] = React.useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTasks(tasks.filter((task) => task.completed === true));
        break;
      case "incomplete":
        setFilteredTasks(tasks.filter((task) => task.completed === false));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Task List</h1>
      </header>
      <div>
        <Form
          setTasks={setTasks}
          tasks={tasks}
          inputText={inputText}
          setInputText={setInputText}
          setStatus={setStatus}
        />
      </div>
      <div>
        <List setTasks={setTasks} tasks={tasks} />
      </div>
    </div>
  );
}

export default App;

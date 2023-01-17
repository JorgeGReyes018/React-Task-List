import React from "react";
import "./App.css";

import Form from "./components/form/form";
import List from "./components/list/list";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [tasks, setTasks] = React.useState([]);
  const [status, setStatus] = React.useState("all");
  const [filteredTasks, setFilteredTasks] = React.useState([]);

  React.useEffect(() => {
    filterHandler();
  }, [tasks, status]);

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
        <a
          className="profileLink"
          href="https://jorgegreyes018.github.io/Project-1-Portfolio/"
        >
          Back to Portfolio
        </a>
      </header>
      <div className="page">
        <Form
          setTasks={setTasks}
          tasks={tasks}
          inputText={inputText}
          setInputText={setInputText}
          setStatus={setStatus}
        />
      </div>
      <div>
        <List filteredTasks={filteredTasks} setTasks={setTasks} tasks={tasks} />
      </div>
      <footer>
        <div className="footDiv"></div>
      </footer>
    </div>
  );
}

export default App;

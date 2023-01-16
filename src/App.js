import React from "react";
import "./App.css";

import Form from "./components/form/form";
import List from "./components/list/list";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Task List</h1>
      </header>
      <div>
        <Form
          inputText={inputText}
          tasks={tasks}
          setTasks={setTasks}
          setInputText={setInputText}
        />
      </div>
      <div>
        <List />
      </div>
    </div>
  );
}

export default App;

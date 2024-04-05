import Welcome from "./containers/welcome/Welcome";
import "./App.css";
import Questions from "./containers/questions/Question";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import End from "./containers/end/End";

function App() {
  const [start, SetStart] = useState(false);
  function handleStart() {
    SetStart(true);
  }

  return (
    <div className="app">
      {start ? <Questions /> : <Welcome onStart={handleStart} />}
    </div>
  );
}

export default App;

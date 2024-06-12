import "./App.css";
import { useState } from "react";

function App() {
  const [showTitle, setShowTitle] = useState(true);

  const toggleTitle = () => {
    setShowTitle(!showTitle);
  };

  return (
    <div className="App">
      <button onClick={toggleTitle}>Show/ Hide Me</button>
      {showTitle && <h1>React Challenges</h1>}
    </div>
  );
}

export default App;

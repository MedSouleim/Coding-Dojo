import "./App.css";
import Display from "./Components/Display";
import Form from "./Components/Form";
import { useState } from "react";
function App() {
  // List of posts objects
  const colorList = [];

  const [color, setColor] = useState(colorList);

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <Form setColor={setColor} color={color} />
      <Display color={color} />
    </div>
  );
}

export default App;

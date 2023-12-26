import "./App.css";
import { Routes, Route,} from "react-router-dom";
import Home from "./components/Home";
import Hello from "./components/Hello";
import RedBlue from "./components/RedBlue"
import Number from "./components/Number"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/4" element={<Number />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/hello/blue/red" element={<RedBlue />} />
      </Routes>
    </div>
  );
}

export default App;

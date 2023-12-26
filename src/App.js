import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Createquiz from "./Pages/createquiz";
import SolvePuzzle from "./Pages/solve-puzzle";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Createquiz />} />
          <Route path="/solve/:puzzleId" element={<SolvePuzzle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

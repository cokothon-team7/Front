import { BrowserRouter, Routes, Route } from "react-router-dom";
import SolvePuzzle from "./Pages/solve-puzzle";
import Main from "./Pages/main";
import Createquiz from "./Pages/createquiz";
import Initpage from "./Pages/initpage";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Initpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route path="/createquiz" element={<Createquiz />} />
          <Route path="/solve/:puzzleId" element={<SolvePuzzle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

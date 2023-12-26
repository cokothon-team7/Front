import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Pages/main';
import Createquiz from './Pages/createquiz'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
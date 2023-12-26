import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Pages/main';
import Createquiz from './Pages/createquiz'
import Initpage from './Pages/initpage'
import Login from './Pages/login'
import Signup from './Pages/signup'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Initpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
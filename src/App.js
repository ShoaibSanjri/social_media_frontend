import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';

import Login from './Components/Login';
import Signup from './Components/Signup';
import CreatePost from './Components/CreatePost';
import UpdatePost from './Components/UpdatePost';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/updatepost" element={<UpdatePost />} />
      </Routes>
    </div>
  );
}

export default App;

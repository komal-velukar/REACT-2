import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.jsx'
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import UseEffect from './Components/31-10/UseEffect';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/use-effect' element={<UseEffect />} />
        
      </Routes>
    </div>
  );

}

export default App;
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.jsx'
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import UseState from './Components/27-10/UseState';
import UseEffect from './Components/31-10/UseEffect';
import UseEffect2 from './Components/31-10/UseEffect2';
import UseEffect3 from './Components/31-10/UseEffect3';
import UseEffect4 from './Components/01-11/UseEffect4';
import PropDrilling from './Components/02-11/PropDrilling';
import { useState } from 'react';
import PropDrilling2 from './Components/02-11/PropDrilling2';
import Mapping from './Components/02-11/Mapping';
import Mapping2 from './Components/02-11/Mapping2';
import ConditionalRendering from './Components/03-11/ConditionalRendering';
import ConditionalRendering2 from './Components/03-11/ConditionalRendering2';
// import ConditionalRendering3 from './Components/03-11/ConditionalRendering3';
import Register1
 from './Components/04-11/Register1.jsx';
// import Login1 from'./Components/06-11/Login1.jsx';
import UseReducer from './Components/09-11/UseReducer.jsx';
function App() {
  const [Student, SetStudent] = useState(['A', "B", "C", "D", "E"])
  const [counter, setCounter] = useState(20)

  function IncrementCounter() {
    setCounter((prevValue) => prevValue + 1)
  }


  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/use-state' element={<UseState />} /> 
        <Route path='/use-effect'element={<UseEffect/>}/>
        <Route path='/use-effect2'element={<UseEffect2/>}/>
        <Route path='/use-effect3'element={<UseEffect3/>}/>
        <Route path='/use-effect4'element={<UseEffect4/>}/>
        <Route path='/prop-drilling'element={<PropDrilling Anything={Student}myName="Komal"/>}/>
        <Route path='/prop-drilling2'element={<PropDrilling2 counter={counter}IncrementCounter={IncrementCounter}/>}/>
        <Route path='/mapping' element={<Mapping />} />
        <Route path='/mapping-2' element={<Mapping2 />} />
        <Route path='/conditional-rendering' element={<ConditionalRendering />} />
        <Route path='/conditional-rendering2' element={<ConditionalRendering2 />} />
        {/* <Route path='/conditional-rendering3' element={<ConditionalRendering3 />} /> */}
        <Route path='/register1' element={<Register1 />} />
        <Route path='/use-reducer' element={<UseReducer/>} />
      </Routes>
      
    </div>
  );
}

export default App;

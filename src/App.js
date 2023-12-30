
import './App.css';
import { Route, BrowserRouter as  Router, Routes } from 'react-router-dom'
import Splash from './start/Splash';
import Create from './auth/Create';
import Login from './auth/Login';
import Home from './Home/Home';
function App() {
  return (

    <>
    <Router>
      <Routes>
        <Route path='/' element={<Splash/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
       
      </Routes>
    </Router>
    </>
  );
}

export default App;

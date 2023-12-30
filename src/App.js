
import './App.css';
import { Route, BrowserRouter as  Router, Routes } from 'react-router-dom'
import Splash from './start/Splash';
import Create from './auth/Create';
import Login from './auth/Login';
function App() {
  return (

    <>
    <Router>
      <Routes>
        <Route path='/' element={<Splash/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/login' element={<Login/>}/>
       
      </Routes>
    </Router>
    </>
  );
}

export default App;


import './App.css';
import { Route, BrowserRouter as  Router, Routes } from 'react-router-dom'
import Splash from './start/Splash';
import Create from './auth/Create';
function App() {
  return (

    <>
    <Router>
      <Routes>
        <Route path='/' element={<Splash/>}/>
        <Route path='/create' element={<Create/>}/>
       
      </Routes>
    </Router>
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/homepage/Home';
import Login from './pages/loginpage/Login';
import Register from './pages/register/Register';
import Navb from './components/Navb';

// import { GoogleLogin } from '@react-oauth/google';



function App() {

 
  return (
    <div className="App">
       
        <Routes>
           <Route path='/' element={<Register></Register>}></Route>
           <Route path='/login' element={ <Login></Login>}></Route>
          <Route path='/home' element={ <Home></Home>}></Route>
        </Routes>
     
    
    </div>
  );
}

export default App;

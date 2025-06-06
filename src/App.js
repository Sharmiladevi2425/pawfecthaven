import './App.css';
import{ BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Login from './Pages/Login';
import Footer from './Components/Footer';
import Cat from './Pages/Cat'
import Dog from './Pages/Dog'

function App() {
  return (
   <div>
    <Router>
    <Navbar />
      <Routes>

        <Route path='/'element={<Home/>}/>
        <Route path='/Login'element={<Login />}/>
        <Route path='/Signin'element={<Signin />}/>
        <Route path='/Cat' element={<Cat />}/>
        <Route path='/Dog' element={<Dog />}/>

      </Routes>
    </Router>
   </div>
  );
}

export default App;

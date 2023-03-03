import logo from './logo.svg';
import './App.css';
// import { Navbar } from './Components/Navbar';
// import { Signup } from './Components/LogIn/SignUp';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Signup } from './Components/LogIn/SignUp';
import { SignIn } from './Components/LogIn/SignIn';
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Signup /> */}
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        
        
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signup } from './Components/LogIn/SignUp';
import { SignIn } from './Components/LogIn/SignIn';
import Home from './Pages/Home';
import { Details } from './Components/MovieDetails/Details';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/movie/1" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;



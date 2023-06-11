import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signup } from './Components/LogIn/SignUp';
import { SignIn } from './Components/LogIn/SignIn';
import Home from './Pages/Home';
import { Details } from './Components/MovieDetails/Details';
import { Seats } from './Components/Seats/Seats';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/movie/:id/" element={<Details />}></Route>
          <Route path="/Seats" element={<Seats />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;



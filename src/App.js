import logo from './logo.svg';
import './App.css';
import Navbar from './Components/shared/Navbar/Navbar';
import Banner from './Components/Pages/Banner/Banner';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;

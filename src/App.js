import logo from './logo.svg';
import './App.css';
import Navbar from './Components/shared/Navbar/Navbar';
import Banner from './Components/Pages/Banner/Banner';
import Home from './Components/Home/Home';
import Footer from './Components/Home/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;

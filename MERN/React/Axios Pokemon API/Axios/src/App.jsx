import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Index from './components';       // components/index.jsx
import Home from './components/home';   // components/home.jsx
import Nav from './components/nav';
function App() {
  return (
    <div>
     

      {/* Route handler */}
      <div>
        <Link to="/Abdallah/white/blue">color page</Link>
        <br />
        <Link to={"/"}>Go to index </Link>
        <br />
        <Link to={"/home"}> Go to Home </Link>
        <br />
        <Link to={"/index/4"}>number</Link>
      </div>
      <Routes>
        <Route path="/index/:number" element={<Index />} />
        <Route path="/" element={<Home />} />
        <Route path="/home/:world" element={<Home />} />
        <Route path='/:world/:bgColor/:textColor' element={<Nav />} />
      </Routes>
    </div>
  );
}

export default App;

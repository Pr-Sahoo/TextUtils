// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About1 from './About1';
import Contact from './Contact';
import Help from './Component/Help';
import Service from './Component/Service';
import Navbar from './Component/Navbar';
import Text from './Component/Text';
import Dark from './Component/Dark';
import About from './Component/About';

function App() {
  return (
    <>
      <Router>
        <Navbar title="TextUtils" About="AboutUs"/>
        <div className="container">
          <Text heading ="Enter your text here"/>
        </div>
        <div>
          <About/>
        </div>
        <Dark/>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
            </ul>
          </nav>

          {/* define routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About1 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/service' element={<Service />} />
            <Route path='/help' element={<Help />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

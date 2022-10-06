import './App.css';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Slogens from './components/Slogens';
import AboutUs1 from './components/AboutUs1';
import AboutUs2 from './components/AboutUs2';
import AboutUs3 from './components/AboutUs3';
import AboutUs4 from './components/AboutUs4';
import AboutUs5 from './components/AboutUs5';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={[<Nav/>,<HeroSection/>,<Slogens/>,<Features/>,<Footer/>]} />
          <Route path="/about" element={[<AboutUs1/>,<AboutUs2/>,<AboutUs3/>,<AboutUs4/>,<AboutUs5/>]} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
    //   <Nav />
    //   <HeroSection />
    //   <Info />
    //   <Features />
    //   <UserInfo />
    //   <Newsletter />
    //   <Footer /> 
    // </div>
  );
}

export default App;

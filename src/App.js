import './App.css';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import Info from './components/Info';
import UserInfo from './components/UserInfo';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <HeroSection />
      <Info />
      <Features />
      <UserInfo />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

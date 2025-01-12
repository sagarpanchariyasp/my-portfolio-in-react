import logo from './logo.svg';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Portfolio from './components/Portfolio';


import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
      
    </div>
  );
}

export default App;

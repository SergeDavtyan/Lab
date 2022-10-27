import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ProsStudents from './components/prosStudents/ProsStudents';
import Partners from './components/partners/Partners';
import Home from './components/home/Home';
import AboutUs from './components/aboutus/AboutUs';
import ArialRobotics from './components/arialRobotics/ArialRobotics';
import News from './components/news/News';
import LearnMore from './components/learnMore/LearnMore';

import PARTNER from "./assets/images/partner.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/prosStudents' element={ <ProsStudents /> } />
        <Route path='/partners' element={<Partners />} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/arialrobotics' element={ <ArialRobotics />} />
        <Route path='/news' element={ <News /> } />
        <Route path='/learnmore' element={ <LearnMore image={PARTNER} /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

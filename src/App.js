import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
    <Navigation/>
   <Header/>
   <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contact/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
   <Footer/>
   </>
  );
}

export default App;

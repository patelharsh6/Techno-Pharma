import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Client from './pages/Clients';
import About from './pages/About';
import Contact from './pages/Contact';




 
function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Client />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
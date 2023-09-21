import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './pages/Cart';
import Shop from './pages/shop/Shop';
import Contact from './pages/Contact';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

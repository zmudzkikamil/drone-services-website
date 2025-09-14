import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<div className="pt-16 text-center py-20"><h1 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Coming Soon</h1><p className="text-gray-600">We're working on showcasing our best work!</p></div>} />
            <Route path="/about" element={<div className="pt-16 text-center py-20"><h1 className="text-4xl font-bold text-gray-900 mb-4">About Us Coming Soon</h1><p className="text-gray-600">Learn more about our team and mission!</p></div>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App

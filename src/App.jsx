
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Charities from './pages/Charities';
import Donation from './pages/Donation';
import TransactionHistory from './pages/TransactionHistory';
import Navbar from './components/navbar.jsx';
import Footer  from './components/footer.jsx';
function App() {
  return (
    <Router>
      <Navbar />
      <nav>
        <Link to="/">Home</Link> | <Link to="/charities">Charities</Link> |{' '}
        <Link to="/donation">Donation</Link> | <Link to="/transaction-history">Transaction History</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charities" element={<Charities />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import './styles/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // Wrap the entire app with Redux Provider
    <Provider store={store}>
      {/* Set up routing */}
      <Router>
        <div className="App d-flex flex-column min-vh-100">
          {/* Header component is outside Routes to appear on all pages */}
          <Header />
          <main className="flex-grow-1">
            <Routes>
              {/* Define routes for different pages */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
          {/* Footer component */}
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
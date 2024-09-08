import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import AuthPage from './pages/AuthPage';
import './styles/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // Wrap the entire app with Redux Provider
    <Provider store={store}>
      {/* Set up routing */}
      <Router>
        <div className="App">
          {/* Header component is outside Routes to appear on all pages */}
          <Header />
          <Routes>
            {/* Define routes for different pages */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
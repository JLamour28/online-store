import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import StorePage from './pages/StorePage';
import CartPage from './pages/CartPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';  // Custom CSS import

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* Main app container with flexbox for footer positioning */}
        <div className="App d-flex flex-column min-vh-100">
          <Header />
          {/* Main content area */}
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/store" element={<StorePage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
          {/* Footer */}
          <footer className="footer text-center">
            <p>&copy; 2023 Online Store. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
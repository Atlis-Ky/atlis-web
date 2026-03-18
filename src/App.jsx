import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Discography from "./pages/Discography";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navigation logo="Atlis">
          <Navigation.Item to="/">Home</Navigation.Item>
          <Navigation.Item to="/about">About</Navigation.Item>
          <Navigation.Item to="/discography">Discography</Navigation.Item>
          <Navigation.Item to="/shop">Shop</Navigation.Item>
          <Navigation.Item to="/contact">Contact</Navigation.Item>
        </Navigation>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/discography" element={<Discography />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2026 Atlis. Made in React by Kyle Smith</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

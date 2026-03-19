import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Discography = lazy(() => import("./pages/Discography"));
const Shop = lazy(() => import("./pages/Shop"));
const Contact = lazy(() => import("./pages/Contact"));

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
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/discography" element={<Discography />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <footer className="footer">
          <p>&copy; 2026 Atlis. Made in React by Kyle Smith</p>
          <a
            href="https://github.com/Atlis-Ky"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-github"
            aria-label="GitHub"
          >
            <img
              src="/github.svg"
              alt="GitHub"
              className="footer-github-icon"
            />
          </a>
        </footer>
      </div>
    </Router>
  );
}

export default App;

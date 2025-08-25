import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import School from "./pages/School";
import Corporate from "./pages/Corporate";
import College from "./pages/College";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/slick-slider.css";
import "./assets/css/main.css";

function App() {
  return (
     <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/school" element={<School />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/college" element={<College />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

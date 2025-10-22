import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Info from "./pages/Info";
import Services from "./pages/Services";
import Legal from "./pages/Legal";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/info" element={<Info />} />
        <Route path="/legal" element={<Legal />} />
        {/* Add more pages here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

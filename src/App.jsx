import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Layout>
        <div id="home" className="section">
          <Home />
        </div>
        <div id="about" className="section">
          <About />
        </div>
        <div id="services" className="section">
          <Services />
        </div>
        <div id="works" className="section">
          <Works />
        </div>
        <div id="contact" className="section">
          <Contact />
        </div>
      </Layout>
    </Router>
  );
}

export default App;

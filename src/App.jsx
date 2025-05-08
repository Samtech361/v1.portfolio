import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import Section from "./components/Section";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Layout>
        <Section id="home">
          <Home />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="services">
          <Services />
        </Section>
        <Section id="works">
          <Works />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </Layout>
    </Router>
  );
}

export default App;

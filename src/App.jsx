import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Project";
import About from "./components/About";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";




import './App.css'

function App() {
  return (
    <>
    <Helmet>
        <title>Sneha Rawat | Portfolio</title>
        <meta name="description" content="Sneha Rawat - BCA graduate & Web Developer. Check out my portfolio with projects, skills, and contact info." />
        <meta name="keywords" content="Sneha Rawat, Portfolio, Web Developer, React, Node.js, Projects" />
        <meta name="author" content="Sneha Rawat" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
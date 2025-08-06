import "./App.css";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Navbar from "./sections/Navbar";
import { useEffect } from "react";
import AOS from 'aos';
import "./i18n";
import 'aos/dist/aos.css';

function App() {
  
    useEffect(() => {
      AOS.init();
    }, []);
  

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

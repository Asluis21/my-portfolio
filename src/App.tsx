import { useState } from "react";
import "./App.css";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <About />
    </>
  );
}

export default App;

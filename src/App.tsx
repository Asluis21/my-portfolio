import { useState } from "react";
import "./App.css";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello word</h1>
      <Hero />
      <About />
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("rishi-theme");

    if (savedTheme === "light") {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";

    localStorage.setItem("rishi-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="app">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}

export default App;

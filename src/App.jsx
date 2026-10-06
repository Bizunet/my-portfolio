import { useEffect, useState } from "react";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, toggleDark] = useTheme();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch projects");
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <>
      <Navbar dark={dark} toggleDark={toggleDark} />
      <main>
        <Hero />
        <About />
        <Portfolio projects={projects} />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

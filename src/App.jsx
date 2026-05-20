import { useTheme } from "./hooks/useTheme";
import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Portfolio from "./components/Portfolio";
import Services  from "./components/Services";
import Contact   from "./components/Contact";
import Footer    from "./components/Footer";

export default function App() {
  const [dark, toggleDark] = useTheme();
  return (
    <>
      <Navbar dark={dark} toggleDark={toggleDark} />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

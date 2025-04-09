import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#121212] text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Resume />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

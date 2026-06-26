import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Quote from "./components/Quote";
import Whyus from "./components/Whyus";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Whyus />
      <Quote />
      <Contact />
      <Footer />
    </main>
  );
}
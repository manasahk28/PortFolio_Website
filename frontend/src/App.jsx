import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        {/* <About /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

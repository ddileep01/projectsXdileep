import "./App.css";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import "./styles.css";

function App() {
  return (
    <div className="h-screen bg-[#121215]">
      <Navbar />
      <HeroSection/>
      <Footer />
    </div>
  );
}

export default App;

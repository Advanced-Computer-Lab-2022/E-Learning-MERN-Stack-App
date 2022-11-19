import Navbar from "./components/navbar/Navbar";
import Homepage from './components/homepage/Homepage'
import Footer from "./components/footer/Footer";
import Reviews from "./components/reviews/Reviews";
import Sections from "./components/courseSections/Sections";
import Faqs from "./components/faq/Faqs";
import LandingPage from "./components/landing/LandingPage";
import Pricing from "./components/pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Pricing />
      <Homepage />
      <Sections />
      <Faqs />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;

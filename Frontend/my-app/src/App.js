import Navbar from "./components/navbar/Navbar";
import Homepage from './components/homepage/Homepage'
import Footer from "./components/footer/Footer";
import Reviews from "./components/reviews/Reviews";
import Sections from "./components/courseSections/Sections";
import Faqs from "./components/faq/Faqs";
import LandingPage from "./components/landing/LandingPage";
import Pricing from "./components/pricing/Pricing";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <LandingPage />
        <Pricing />
        <Homepage />
        <Sections />
        <Faqs />
        <Reviews />
      </Layout>
    </div>
  );
}

export default App;

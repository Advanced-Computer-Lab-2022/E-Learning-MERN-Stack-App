import Navbar from "./components/navbar/Navbar";
import Homepage from './components/homepage/Homepage'
import Footer from "./components/footer/Footer";
import Reviews from "./components/reviews/Reviews";
import Sections from "./components/courseSections/Sections";
import Faqs from "./components/faq/Faqs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Sections />
      <Faqs />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;

import Navbar from "./components/navbar/Navbar";
import Homepage from './components/homepage/Homepage'
import Footer from "./components/footer/Footer";
import Reviews from "./components/reviews/Reviews";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;

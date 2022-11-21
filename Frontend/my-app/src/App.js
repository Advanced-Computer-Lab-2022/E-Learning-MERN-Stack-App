import Homepage from './components/homepage/Homepage'
import Reviews from "./components/reviews/Reviews";
import Sections from "./components/courseSections/Sections";
import Faqs from "./components/faq/Faqs";
import LandingPage from "./components/landing/LandingPage";
import Pricing from "./components/pricing/Pricing";
import Layout from "./components/Layout";
import { useState } from 'react';
import ContactUs from './components/contactus/ContactUs';
import Features from './components/landing/Features';
function App() {
  const [navActiveState, setNavActiveState] = useState(0);
  return (
    <div className="App">
      <Layout
        navActiveState={navActiveState}
        setNavActiveState={setNavActiveState}
      >
        <LandingPage visible={navActiveState === 0} />
        <Features visible={navActiveState === 0} />
        <Homepage visible={navActiveState === 1} />
        <Sections visible={navActiveState === 1} />
        <Faqs visible={navActiveState === 1} />
        <Reviews visible={navActiveState === 1} />
        <Pricing visible={navActiveState === 2} />
        <ContactUs visible={navActiveState === 4} />
      </Layout>
    </div>
  );
}

export default App;

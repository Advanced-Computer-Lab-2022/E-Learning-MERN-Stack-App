import Homepage from '../components/homepage/Homepage'
import LandingPage from "../components/landing/LandingPage";
import Pricing from "../components/pricing/Pricing";
import Layout from "../components/Layout";
import ContactUs from '../components/contactus/ContactUs';
import Features from '../components/landing/Features';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import { useContext } from 'react';
import NavStateContext from '../context/NavStateContext';
const GuestPage = () => {
    const { navIdx } = useContext(NavStateContext);
    return (
        <Layout>
            <LandingPage visible={navIdx === 0} />
            <Features visible={navIdx === 0} />
            <Homepage visible={navIdx === 1} />
            <Pricing visible={navIdx === 2} />
            <ContactUs visible={navIdx === 4} />
            <Login visible={navIdx === 5} />
            <Signup visible={navIdx === 6} />
        </Layout>

    )
}

export default GuestPage
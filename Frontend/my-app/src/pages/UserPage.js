import Homepage from '../components/homepage/Homepage'
import LandingPage from "../components/landing/LandingPage";
import Pricing from "../components/pricing/Pricing";
import ContactUs from '../components/contactus/ContactUs';
import Features from '../components/landing/Features';
import { useContext } from 'react';
import NavStateContext from '../context/NavStateContext';
import CurrentViewContext from '../context/CurrentViewContext';
import LoggedInLayout from '../components/LoggedIn/LoggedInLayout';
import AccountInfo from '../components/LoggedIn/AccountInfo';
import UserInfoContext from '../context/UserInfoContext';
import InstructorViewCourses from '../components/InstructorViewCourses/InstructorViewCourses';

const UserPage = () => {
    const { navIdx } = useContext(NavStateContext);
    const { view } = useContext(CurrentViewContext);
    const { user } = useContext(UserInfoContext);

    if (view === "user")
        return (
            <LoggedInLayout>
                <LandingPage visible={navIdx === 0} />
                <Features visible={navIdx === 0} />
                <Homepage visible={navIdx === 1} />
                <Pricing visible={navIdx === 2} />
                <ContactUs visible={navIdx === 4} />
                <AccountInfo visible={navIdx === 8} />
                <InstructorViewCourses visible={navIdx === 64} />
                {/* <InstructorCreateACourse visible={navIdx === 65 && user.role === 'instructor'} /> */}
                {/* <AdminDashboard visible={navIdx === 128 && user.role === 'admin'} /> */}
            </LoggedInLayout>
        )
}

export default UserPage
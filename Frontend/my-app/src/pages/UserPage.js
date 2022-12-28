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
import InstructorViewCourses from '../components/InstructorViewCourses/InstructorViewCourses';
import InstructorCreateCourse from '../components/InstructorCreateCourse/InstructorCreateCourse';
import AdminDashboard from '../components/AdminDashboard/AdminDashboard';
import TraineeCoursesITake from '../components/TraineeCoursesITake/TraineeCoursesITake';
import InstructorViewReviews from '../components/InstructorViewReviews/InstructorViewReviews'
import { navbar } from '@material-tailwind/react';
import InstructorAddSection from '../components/InstructorAddSection/InstructorAddSection';

const UserPage = () => {
    const { navIdx } = useContext(NavStateContext);
    const { view } = useContext(CurrentViewContext);

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
                <InstructorViewReviews visible ={navIdx === 65} />
                <InstructorCreateCourse visible={navIdx === 66} />
                <InstructorAddSection visible={navIdx === 67} />
                <AdminDashboard visible={navIdx === 128} />
                <TraineeCoursesITake visible={navIdx === 512} />
            </LoggedInLayout>
        )
}

export default UserPage
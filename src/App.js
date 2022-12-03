import './App.css';
import CreateCourePage from './Pages/CreateCoursePage/CreateCourePage';
import EditAccountInfoPage from './Pages/EditAccountInfoPage/EditAccountInfoPage';
import InstructorPage from './Pages/InstructorPage/InstructorPage.jsx'
import MoneyOwed from './components/MoneyOwed/MoneyOwed';
import { Route, Routes } from 'react-router-dom';
import RightNavBar from './components/RightNavBar/RightNavBar';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<InstructorPage />} />
                <Route path='/mycourses' element={<InstructorPage />} />
                <Route path='/viewmoneyowed' element={<MoneyOwed />} />
                <Route path='/createacourse' element={<CreateCourePage />} />
                <Route path='/editaccountinfo' element={<EditAccountInfoPage />} />
                <Route path='/*' element={<><h2 className='text-center'>Page Not Found</h2><RightNavBar /></>} />
            </Routes>
        </>
    );
}

export default App;

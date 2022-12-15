import CreateCoursePage from './Pages/CreateCoursePage/CreateCoursePage';
import EditAccountInfoPage from './Pages/EditAccountInfoPage/EditAccountInfoPage';
import InstructorPage from './Pages/InstructorPage/InstructorPage.jsx'
import MoneyOwed from './components/MoneyOwed/MoneyOwed';
import { Route, Routes } from 'react-router-dom';
import RightNavBar from './components/RightNavBar/RightNavBar';
import CoursePage from './Pages/CoursePage/CoursePage';
import CoursesContextProvider from './Contexts/CoursesContext';
import React from 'react';


function App() {
    return (
        <>
                <CoursesContextProvider>
                    <Routes>
                        <Route path='/' element={<InstructorPage />} />
                        <Route path='/mycourses' element={<InstructorPage />} />
                        <Route path='/viewmoneyowed' element={<MoneyOwed />} />
                        <Route path='/createacourse' element={<CreateCoursePage />} />
                        <Route path='/editaccountinfo' element={<EditAccountInfoPage />} />
                        <Route path='/mycourses/:id' element={<CoursePage />} />
                        <Route path='/*' element={
                            <>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-xl-9 col-md-12'>
                                            <h1 className='text-center'> Page Not Found</h1>
                                        </div>
                                        <div className='col-xl-3 col-md-12'>
                                            <RightNavBar />
                                        </div>
                                    </div>
                                </div>
                            </>
                        } />
                    </Routes>
                </CoursesContextProvider>
        </>
    );
}

export default App;

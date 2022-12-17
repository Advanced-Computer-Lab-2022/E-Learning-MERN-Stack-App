import React from 'react';
import { Route, Routes } from 'react-router-dom';
import InstructorPage from './InstructorPage/InstructorPage.jsx';
import CreateCoursePage from './CreateCoursePage/CreateCoursePage.jsx';
import CoursePage from './CoursePage/CoursePage.jsx';
import EditAccountInfoPage from './EditAccountInfoPage/EditAccountInfoPage.jsx';
import MoneyOwed from './MoneyOwed/MoneyOwed.jsx';
import CoursesContextProvider from '../Contexts/CoursesContext.jsx';
import RightNavBar from '../components/RightNavBar/RightNavBar.jsx';

export default function InstructorDashboard() {
        return <>
                <CoursesContextProvider>
                        <Routes>
                                <Route path='/instructor' element={<InstructorPage />} />
                                <Route path='/instructor/mycourses' element={<InstructorPage />} />
                                <Route path='/instructor/viewmoneyowed' element={<MoneyOwed />} />
                                <Route path='/instructor/createacourse' element={<CreateCoursePage />} />
                                <Route path='/instructor/editaccountinfo' element={<EditAccountInfoPage />} />
                                <Route path='/instructor/mycourses/:id' element={<CoursePage />} />
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
}
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import CourseCard from './CourseCard'
import CourseCardsWrapper from './CourseCardsWrapper'
import CoursesHolder from './CoursesHolder'
import CourseContext from '../../context/CourseContext';
// import AllCourses from '../../context/AllCoursesContext';

const AdminDashboard = ({ visible }) => {

    const [courses, setCourses] = useState([]);
    // const [courseIdx, setCourseIdx] = useContext(CourseContext);
    // const [setAllCourses] = useContext(AllCourses)

    // useEffect(() => {
    //     axios
    //         .get('http://localhost:8000/api/getCourses')
    //         .then(response => {
    //             console.log(response);
    //             // this would trigger a rerender
    //             setCourses(response.data.courses);
    //         })
    //         .catch(error => console.log(error));
    // }, []);

    if (visible)
        return (
            <>AdminDashboard</>
        )
}

export default AdminDashboard
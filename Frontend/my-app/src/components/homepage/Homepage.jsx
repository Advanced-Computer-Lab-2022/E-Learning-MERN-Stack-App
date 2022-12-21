import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import CourseCard from './CourseCard'
import CourseCardsWrapper from './CourseCardsWrapper'
import CoursesHolder from './CoursesHolder'
import CourseContext from '../../context/CourseInfoContext';
// import AllCourses from '../../context/AllCoursesContext';

const Homepage = ({ visible }) => {

    const [courses, setCourses] = useState([]);
    // const [courseIdx, setCourseIdx] = useContext(CourseContext);
    // const [setAllCourses] = useContext(AllCourses)

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/getCourses')
            .then(response => {
                console.log(response);
                // this would trigger a rerender
                setCourses(response.data.courses);
            })
            .catch(error => console.log(error));
    }, []);

    function getCategories() {
        return Array.from(new Set(courses.map(course => course.category)));
    }

    var testCourse = {
        ...courses[0]
    }

    if (visible)
        return (
            <>
                <div className='text-center py-10 text-blue-500 text-4xl font-extrabold'>All Categories</div>
                <CoursesHolder>
                    {
                        getCategories()
                            .map(category =>
                                <CourseCardsWrapper headingText={category}>
                                    {
                                        courses
                                            .filter(course => course.category === category)
                                            .map((course, index) =>
                                                <CourseCard key={index} course={course} />
                                            )
                                    }

                                </CourseCardsWrapper>
                            )
                    }
                    {/* For Stripe Testing */}
                    {
                    }
                    <CourseCard key={1} course={testCourse} />
                </CoursesHolder>
            </>
        )
}

export default Homepage
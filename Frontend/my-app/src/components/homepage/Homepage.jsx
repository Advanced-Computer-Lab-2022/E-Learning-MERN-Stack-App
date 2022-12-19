import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import CourseCard from './CourseCard'
import CourseCardsWrapper from './CourseCardsWrapper'
import CoursesHolder from './CoursesHolder'

const Homepage = ({ visible }) => {

    const [courses, setCourses] = useState([]);

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

    if (visible)
        return (
            <>
                <div className='text-center py-10 text-blue-500 text-4xl font-extrabold'>All Categories</div>
                <CoursesHolder>
                    {
                        getCategories().map(
                            category =>
                                <CourseCardsWrapper headingText={category}>
                                    {
                                        courses.map((course, index) => <CourseCard key={index} courseName={course.name} courseDetails={course.description} coursePrice={course.price} />)
                                    }
                                </CourseCardsWrapper>
                        )
                    }
                </CoursesHolder>

            </>
        )
}

export default Homepage
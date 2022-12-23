import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import CourseCard from './CourseCard'
import CourseCardsWrapper from './CourseCardsWrapper'
import CoursesHolder from './CoursesHolder'
import CourseContext from '../../context/CourseContext';
import { FiltersContext } from '../../context/FiltersContext';
// import AllCourses from '../../context/AllCoursesContext';

const Homepage = ({ visible }) => {

    const [courses, setCourses] = useState([]);
    // const [courseIdx, setCourseIdx] = useContext(CourseContext);
    // const [setAllCourses] = useContext(AllCourses)
    let {
        search, setSearch,
        minPrice, setMinPrice,
        maxPrice, setMaxPrice,
        allCategories, setAllCategories,
        selectedCategory, setSelectedCategory,
        rating, setRating
    } = useContext(FiltersContext);


    useEffect(() => {
        axios
            .get('http://localhost:8000/api/getCourses')
            .then(response => {
                console.log(response);
                setCourses(response.data.courses);
            })
            .catch(error => console.log(error));
    }, []);


    useEffect(() => {
        setAllCategories(getCategories());
    }, [courses])

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
                            .map((category, catIndx) =>
                                <CourseCardsWrapper headingText={category}>
                                    {
                                        courses
                                            .filter(course => course.category === category)
                                            .filter(course => course.name.toLowerCase().includes(search.toLowerCase())
                                                || course.title.toLowerCase().includes(search.toLowerCase())
                                                || course.createdBy.toLowerCase().includes(search.toLowerCase())
                                                || course.description.toLowerCase().includes(search.toLowerCase()))
                                            .filter(course => course.price >= minPrice && course.price <= maxPrice)
                                            .filter(course => {
                                                if (selectedCategory === '') return true
                                                return course.category === selectedCategory
                                            })
                                            .filter(course => {
                                                if (rating === -1) return true
                                                return course.rating === rating
                                            })
                                            .map((course, index) =>
                                                <CourseCard key={index} course={course} id={(course._id)} />
                                            )
                                    }

                                </CourseCardsWrapper>
                            )
                    }
                    {/* For Stripe Testing */}
                    {/* <CourseCard key={1} course={testCourse} /> */}
                </CoursesHolder>
            </>
        )
}

export default Homepage
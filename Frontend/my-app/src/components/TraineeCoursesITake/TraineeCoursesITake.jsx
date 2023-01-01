import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import CourseCard from '../homepage/CourseCard'
import CourseCardsWrapper from '../homepage/CourseCardsWrapper'
import CoursesHolder from '../homepage/CoursesHolder'
import CourseContext from '../../context/CourseContext';
import UserInfoContext from '../../context/UserInfoContext';
import { FiltersContext } from '../../context/FiltersContext';
// import AllCourses from '../../context/AllCoursesContext';

const TraineeCoursesITake = ({ visible }) => {

    const [courses, setCourses] = useState([]);
    const { user } = useContext(UserInfoContext);
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
                // this would trigger a rerender
                setCourses(response.data.courses);
            })
            .catch(error => console.log(error));
    }, []);

    function getCategories() {
        return Array.from(new Set(user.courses
            .map(course => course.category)));
    }

    if (visible)
        return (
            <>
                <div className='text-center py-10 text-blue-500 text-4xl font-extrabold'>Courses I Take</div>
                <CoursesHolder>
                    {
                        getCategories()
                            .map(category =>
                                <CourseCardsWrapper headingText={category}>
                                    {
                                        user.courses
                                            .filter(course => course.category === category)
                                            .filter(course => course.title.toLowerCase().includes(search.toLowerCase())
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
                </CoursesHolder>
            </>
        )
}

export default TraineeCoursesITake
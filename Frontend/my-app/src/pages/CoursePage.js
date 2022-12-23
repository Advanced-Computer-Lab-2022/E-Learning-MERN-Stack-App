import React, { useEffect, useState } from 'react'
import CourseFirstDiv from '../components/coursePage/CourseFirstDiv'
import CourseInstructorPlaceHolder from '../components/coursePage/CourseInstructorPlaceHolder'
import Sections from '../components/courseSections/Sections'
import Faqs from '../components/faq/Faqs'
import Layout from '../components/Layout'
import Reviews from '../components/reviews/Reviews'
import CurrentViewContext from '../context/CurrentViewContext'
import { useContext } from 'react'
import CourseAndInstructorRating from '../components/course&InstructorRating/CourseAndInstructorRating'
import { CourseContext } from '../context/CourseContext'
import axios from 'axios'

const CoursePage = ({ navActiveState, setNavActiveState, owned }) => {
    const { view } = useContext(CurrentViewContext);
    const { courseId } = useContext(CourseContext);
    const [courses, setCourses] = useState([]);
    const [intendedCourse, setIntendedCourse] = useState({});

    function getCategories() {
        return Array.from(new Set(courses.map(course => course.category)));
    }

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
        courses.forEach(course => {
            if (course._id === courseId)
                setIntendedCourse(course);
        })
    })

    return (
        <Layout>
            <h1 className='text-center text-red-500 text-lg'>CourseTitle: {intendedCourse.name}</h1>
            <CourseFirstDiv owned={owned} />
            <div className="mx-40 my-10 flex">
                <div className='w-1/2'>
                    <CourseInstructorPlaceHolder />
                </div>
                <div className='w-1/2 shadow-2xl rounded-2xl'>
                    <iframe className='w-full rounded-2xl' width="520" height="340" src="https://www.youtube.com/embed/rfscVS0vtbw" title="Learn Python - Full Course for Beginners [Tutorial]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <Sections visible={true} />
            <Reviews visible={true} />
            <Faqs visible={true} />
            <CourseAndInstructorRating courseRating={2.5} owned={owned} />
        </Layout>
    )
}

export default CoursePage
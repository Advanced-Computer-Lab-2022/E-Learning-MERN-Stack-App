import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function CorporateRequestCourse({ visible }) {

    const [courses, setCourses] = useState([]);
    const [chosenCourse, setChosenCourse] = useState({});
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/getCourses')
            .then(res => {
                console.log(res);
                setCourses(res.data.courses);
            })
            .catch(err => console.log(err));
    }, [])

    function handleSubmit(e) {
        axios.post('http://localhost:8000/api/orgGuest/requestCourseAccess')
            .then(res => {
                console.log(res);
                setMessage(res);
            })
            .catch(err => {
                console.log(err);
                setMessage(err);
            })
    }

    if (visible)
        return (
            <>
                <div className='text-center'>
                    <select name="coursesChoice" className="flex-1 block mx-auto appearance-none border border-gray-300 w-1/3 py-2 px-4 bg-white text-gray-800 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" onChange={e => setChosenCourse(e)} >
                        <option disabled selected>Select Course</option>
                        {
                            courses.map(course => <option value={course._id}>{course.title}</option>)
                        }
                    </select>
                    <button type="button" className="mb-12 mt-12 w/1/3 px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-500 shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2" onClick={e => handleSubmit(e)}>
                        <span className="w-full">
                            Request Course
                        </span>
                    </button>

                    {/* {
                        // message === 'User Added Successfully'
                        true
                            ? <p className="mt-3 text-md text-center text-green-600">{message}</p>
                            : <p className="mt-3 text-md text-center text-red-600">{message}</p>
                    } */}
                </div>
            </>
        )
}

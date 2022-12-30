import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react'
import { useCookies } from 'react-cookie';
import UserInfoContext from '../../context/UserInfoContext';

export default function SetPromotion() {

    const [toBeSent, setToBeSent] = useState({
        courseId: '',
        discount: ''
    });

    const [cookies] = useCookies(['token']);
    const [courses, setCourses] = useState([]);
    const { user } = useContext(UserInfoContext);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/getCourses')
            .then(res => {
                console.log(res);
                setCourses(res.data.courses);
            })
            .catch(err => console.log(err));
    }, [])

    function handleCoursesChoiceChange(e) {
        setToBeSent({
            ...toBeSent,
            courseId: e.target.value
        })
    }
    function handlePromotionChange(e) {
        setToBeSent({
            ...toBeSent,
            discount: e.target.value / 100
        })
    }

    function handleSubmitIfInstructor(e) {

        setCourses(courses.filter(course => course.createdBy === user.userName));

        axios.post('http://localhost:8000/api/instructor/setDiscount', toBeSent, {
            headers: {
                authorization: cookies['token']
            }
        })
            .then((response) => {
                console.log(response);
            })
    }
    function handleSubmitIfAdmin(e) {
        axios.post('http://localhost:8000/api/admin/setDiscount', toBeSent, {
            headers: {
                authorization: cookies['token']
            }
        })
            .then((response) => {
                console.log(response);
            })
    }
    return (

        <>
            <div className='text-center'>
                <select name="coursesChoice" className="flex-1 appearance-none border border-gray-300 w-1/3 py-2 px-4 bg-white text-gray-800 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" onChange={e => handleCoursesChoiceChange(e)} >
                    <option disabled selected>Select Course</option>
                    {
                        courses.map(course => <option value={course._id}>{course.title}</option>)
                    }
                </select>
                <div className='w-1/3 md:w-1/3 px-3 mx-auto text-center'>
                    <label className='tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Please write a number from 0 to 100</label>
                    <input className='appearance-none w-full bg-white text-gray-700 placeholder:text-gray-800 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='number' onClick={(e) => handlePromotionChange(e)} />
                </div>
                <button type="button" className="mb-12 mt-12 w/1/3 px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-500 shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2" onClick={(e) => {
                    if (user.role === 'admin') handleSubmitIfAdmin();
                    if (user.role === 'instructor') handleSubmitIfInstructor();
                }
                }>
                    <span className="w-full">
                        Set Discount
                    </span>
                </button>
            </div>

        </>
    )
}

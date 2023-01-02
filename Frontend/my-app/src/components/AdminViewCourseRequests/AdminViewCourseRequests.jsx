import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

export default function AdminViewCourseRequests({ visible }) {
    const [cookies] = useCookies(['token']);
    const [corporateTrainees, setCorporateTrainees] = useState([]);
    const [grantedCourses, setGrantedCourses] = useState([]);

    const [requests, setRequests] = useState([
        {
            userName: 'cuteCat1',
            userImg: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(21).jpg',
            requestedCourse: {
                _id: 'abc1',
                title: 'Cyber Security'
            }
        },
        {
            userName: 'cuteCat2',
            userImg: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(21).jpg',
            requestedCourse: {
                _id: 'abc2',
                title: 'Cyber Security'
            }
        }
    ]);
    const [acceptedRequest, setAcceptedRequest] = useState({
        corporateTrainees: [],
        grantedCourses: []
    })

    // useEffect(() => {
    //     axios.get('http://localhost:8000/admin/getCourseRequests', {
    //         headers: {
    //             authorization: cookies['token']
    //         }
    //     }).then(res => {
    //         console.log(res);
    //         setRequests(res.data);
    //     }).catch(err => console.log(err));
    // }, [])

    function handleAcceptRequest(e, index) {
        const removeItem = (index) => {
            setRequests([
                ...requests.slice(0, index),
                ...requests.slice(index + 1)
            ]);
        }
        setCorporateTrainees([
            ...corporateTrainees,
            requests[index].userName
        ]);

        setGrantedCourses([
            ...grantedCourses,
            requests[index].requestedCourse._id
        ]);

        let req = {
            corporateTrainees,
            grantedCourses
        };
        axios.post('http://localhost:8000/admin/grantAccess', req, {
            headers: {
                authorization: cookies['token']
            }
        }).then(res => {
            console.log(res);
            removeItem(index);
        }).catch(err => console.log(err));
    }

    if (visible)
        return (
            <>
                <div class="mx-auto mb-12 hw-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Course Requests</h5>
                    </div>
                    <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                            {
                                requests.map((request, index) => {
                                    return <li key={index} class="py-3 sm:py-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-shrink-0">
                                                <img className="w-8 h-8 rounded-full" src={request.userImg} alt="Neil image" />
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    {request.requestedCourse.title}
                                                </p>
                                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    {request.userName}
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <button type="button" className="mb-12 mt-12 w/1/3 px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-500 shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2" onClick={(e) =>
                                                    handleAcceptRequest(e, index)
                                                }>
                                                    <span className="w-full">
                                                        Accept Request
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>

                {/* <p className='green' */}
            </>
        )
}

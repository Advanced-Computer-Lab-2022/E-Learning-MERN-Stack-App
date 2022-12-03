import { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import Course from '../../Course/Course'
import './Main.css'

export default function Main() {
    const [courses, setCourses] = useState([]);

    async function getAllCourses() {
        const response = await Axios.get(`http://localhost:3000/instructor/getCourses`);
        console.log(response);
        setCourses(response.data);
    }

    useEffect(() => {
        getAllCourses();
    }, [])

    return (
        <>
            <div class="container text-center">
                <main class="row row-cols-3 bg-body g-5">
                    <div class="col bg-black fakeImageContainer">
                        <Course />
                    </div>
                    <div class="col bg-black fakeImageContainer">
                        <Course />
                    </div>
                    <div class="col bg-black fakeImageContainer">
                        <Course />
                    </div>
                    <div class="col bg-black fakeImageContainer">
                        <Course />
                    </div>
                    <div class="col bg-black fakeImageContainer">
                        <Course />
                    </div>
                    <div class="col bg-black fakeImageContainer">
                        <Course />
                    </div>
                    <div class="col bg-black fakeImageContainer">
                        <Course />
                    </div>
                    <div class="col bg-black fakeImageContainer">
                        <Course />
                    </div>
                    <div class="col bg-black fakeImageContainer">
                        <Course />
                    </div>
                    <div class="col bg-black fakeImageContainer">
                        <Course />
                    </div>
                    <div class="col bg-black fakeImageContainer">
                        <Course />
                    </div>
                    <div class="col bg-black fakeImageContainer">
                        <Course />
                    </div>
                    {
                        courses.map((course, index) =>
                            <div key={index} className="col bg-black fakeImageContainer"><Course courseInfo={course} /></div>
                        )
                    }
                </main>
            </div>
        </>
    )
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AddChapter from '../../components/AddChapter/AddChapter.jsx'
import Chapters from '../../components/Chapters/Chapters.jsx'
import Reviews from '../../components/Reviews/Reviews.jsx'

export default function CoursePage(props) {
    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <section className="col-4 vh-100">
                        <ul>
                            <li>Course Name: {props.course.name}</li>
                            <li>Course Title: {props.course.title}</li>
                            <li>Course Description: {props.course.description}</li>
                            <li>Course Price: {props.course.price}</li>
                            <li>Course Category: {props.course.category}</li>
                            <li>
                                Course Short Video:
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe title="vid1" className="embed-responsive-item" src={props.course.shortVideo} allowfullscreen></iframe>
                                </div>
                            </li>
                        </ul>
                        <Reviews />
                    </section>

                    <section className='col-5'>
                        <Chapters />
                    </section>

                    <aside className="col-3 vh-100 text-center">
                        <AddChapter />
                    </aside>

                </div>
            </div>
        </>
    )
}

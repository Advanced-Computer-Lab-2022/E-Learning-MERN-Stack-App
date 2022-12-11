import React, { useContext } from 'react'
import AddChapter from '../../components/AddChapter/AddChapter.jsx'
import Chapters from '../../components/Chapters/Chapters.jsx'
import Reviews from '../../components/Reviews/Reviews.jsx'
import { coursesContext } from '../../Contexts/CoursesContext.jsx'

import { useParams } from 'react-router-dom';

export default function CoursePage(props) {
    const { courses } = useContext(coursesContext);
    const { id } = useParams();

    const { name, title, description, price, category } = courses[id];

    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <section className="col-4 vh-100">
                        <ul>
                            <li>Course Name: {name}</li>
                            <li>Course Title: {title}</li>
                            <li>Course Description: {description}</li>
                            <li>Course Price: {price}</li>
                            <li>Course Category: {category}</li>
                            <li>
                                Course Short Video:
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe title="vid1" className="embed-responsive-item" src={courses[id].shortVideo} allowFullScreen></iframe>
                                </div>
                            </li>
                        </ul>
                        <Reviews />
                    </section>

                    <section className='col-5'>
                        <Chapters index={id} />
                    </section>

                    <aside className="col-3 vh-100 text-center"></aside>

                </div>
            </div>
        </>
    )
}

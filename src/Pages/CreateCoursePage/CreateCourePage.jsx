import { Axios } from 'axios';
import React, { useState } from 'react'
import RightNavBar from '../../components/RightNavBar/RightNavBar'

export default function CreateCourePage() {
    const [course, setCourse] = useState({ title: "", subtitle: "", price: "", shortSummary: "" });

    function handleSubmit() {
        // Axios.post('http://localhost:3000/instructor/createCourse', course);
        console.log('course is submitted!');
    }
    function handleTitleChange(event) {
        setCourse({
            ...course,
            title: event.target.value
        });
        console.log(course.title);
    }
    function handleSubtitleChange(event) {
        setCourse({
            ...course,
            subtitle: event.target.value
        });
    }
    function handlePriceChange(event) {
        setCourse({
            ...course,
            price: event.target.value
        });
    }
    function handleShortsummaryChange(event) {
        setCourse({
            ...course,
            shortSummary: event.target.value
        });
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <section className="col-9 vh-100">
                        <h1>Create a Course</h1>
                        <form className="g-3 needs-validation" noValidate >
                            <div className="ms-3 mt-3 w-50">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" onChange={event => handleTitleChange(event)} id="title" defaultValue={course.title} required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="ms-3 mt-3 w-50">
                                <label htmlFor="subtitle" className="form-label">Subtitle</label>
                                <input type="text" className="form-control" id="subtitle" defaultValue={course.subtitle} onChange={event => handleSubtitleChange(event)} required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="ms-3 mt-3 w-50">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input type="number" className="form-control" id="price" onChange={event => handlePriceChange(event)} defaultValue={course.price} required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="ms-3 mt-3 w-50">
                                <label htmlFor="shortSummary" className="form-label">Short Summary</label>
                                <input type="text" className="form-control" id="shortSummary" onChange={event => handleShortsummaryChange(event)} defaultValue={course.shortSummary} required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="ms-3 mt-4 w-50">
                                <button className="btn btn-primary" type="submit" onSubmit={handleSubmit()}>Create Course</button>
                            </div>
                        </form>
                    </section>

                    <aside className="col-3 vh-100 text-center">
                        <div className='rightNavBar overflow-hidden'>
                            <RightNavBar />
                        </div>
                    </aside>

                </div>
            </div>

        </>
    )
}

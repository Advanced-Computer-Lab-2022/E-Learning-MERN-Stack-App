import React, { useState } from 'react'
import RightNavBar from '../../components/RightNavBar/RightNavBar'
import './CreateCoursePage.css'

export default function CreateCoursePage() {

    const [course, setCourse] = useState({
        name: "",
        title: "",
        description: "",
        mainPicture: {},
        shortVideo: "",
        price: 0,
        createdBy: "",
        category: "",
        chapters: [{
            videos: {},
            text: "",
            quizes: {}
        }]
    });

    function handleSubmit() {
        // Axios.post('http://localhost:8000/instructor/createCourse', course);
    }
    function handleNameChange(e) {
        setCourse({
            ...course,
            name: e.target.value
        });
        console.log(course);
    }
    function handleTitleChange(e) {
        setCourse({
            ...course,
            title: e.target.value
        });
        console.log(course);
    }

    function handleDescriptionChange(e) {
        setCourse({
            ...course,
            description: e.target.value
        });
        console.log(course);
    }

    function handlePriceChange(e) {
        setCourse({
            ...course,
            price: e.target.value
        });
        console.log(course);
    }

    function handleCategoryChange(e) {
        setCourse({
            ...course,
            category: e.target.value
        });
        console.log(course);
    }

    function handleShortVideoChange(e) {
        setCourse({
            ...course,
            shortVideo: e.target.value
        });
        console.log(course);
    }


    let content =
        <div className="container-fluid">
            <div className="row">

                <section className="col-9 vh-100">
                    <h1>Create a Course</h1>

                    <form className="g-3 needs-validation" noValidate>
                        <div className="ms-4 mt-3 w-50">
                            <label htmlFor="title" className="form-label">Name</label>
                            <input type="text" className="form-control" onChange={e => handleNameChange(e)} id="name" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="ms-4 mt-3 w-50">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" onChange={e => handleTitleChange(e)} id="title" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="ms-4 mt-3 w-50">
                            <label htmlFor="subtitle" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" onChange={e => handleDescriptionChange(e)} required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="ms-4 mt-3 w-50">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input type="number" className="form-control" id="price" onChange={e => handlePriceChange(e)} required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="ms-4 mt-3 w-50">
                            <label htmlFor="category" className="form-label">Category</label>
                            <input type="text" className="form-control" id="category" onChange={e => handleCategoryChange(e)} required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="ms-4 mt-3 w-50">
                            <label htmlFor="shortVideoLink" className="form-label">Short Video Link</label>
                            <input type="text" className="form-control" id="shortVideoLink" onChange={e => handleShortVideoChange(e)} required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="ms-4 mt-4 w-50">
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

    return (
        <>
            {content}
        </>
    )
}

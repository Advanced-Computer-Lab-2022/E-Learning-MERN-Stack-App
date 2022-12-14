import { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import RightNavBar from '../../components/RightNavBar/RightNavBar.jsx'
import { coursesContext } from '../../Contexts/CoursesContext.jsx'
import './InstructorPage.css'

export default function InstructorPage() {
    const { courses } = useContext(coursesContext);
    const [fromInputValue, setFromInputValue] = useState(0);
    const [toInputValue, setToInputValue] = useState(99999999999);
    const [searchInputValue, setSearchInputValue] = useState("");

    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <section className="col-xl-9 col-md-12 vh-100">
                        <header className='ms-4 mt-3 overflow-hidden'>
                            <h1 className='ms-4 mt-4'>My Courses</h1>
                            <div className="input-group">
                                <div className="form-outline w-75 ms-4 mt-2">
                                    <label className="form-label" htmlFor="search-focus"></label>
                                    <input id="search-focus" type="search" className="form-control" placeholder="Search" onChange={e => setSearchInputValue(e.target.value)} />
                                </div>
                            </div>
                        </header>

                        <div className="container text-center mt-3">
                            <main className="row bg-body g-5">
                                {
                                    courses
                                        .filter(course => course.price >= fromInputValue && course.price <= toInputValue)
                                        .filter(course => course.name.toLowerCase().includes(searchInputValue.toLowerCase()))
                                        .map((course, index) =>
                                            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-3">
                                                <h3>{course.name}</h3>
                                                <h4>Category: {course.category}</h4>
                                                <img src='https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp' alt="mainPictureOfCourse" className='w-100' />
                                                <p className='text-center'>Price: {course.price}</p>
                                                <Link to={'/mycourses/' + index}>View Course</Link>
                                            </div>
                                        )
                                }
                            </main>
                        </div>

                    </section>

                    <aside className="col-xl-3 col-md-12 vh-100 text-center position-relative bg-danger">
                        <RightNavBar />

                        <div className="price position-absolute">
                            <h3>Price</h3>
                            <p className='text-black-50' >from</p>
                            <input type="number" name="from" id="from" onChange={e => setFromInputValue(e.target.value)} />
                            <p className='text-black-50'>to</p>
                            <input type="number" name="to" id="to" onChange={e => setToInputValue(e.target.value)} />
                        </div>

                    </aside>

                </div>
            </div>
        </>
    )
}

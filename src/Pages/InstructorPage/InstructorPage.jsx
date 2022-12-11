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

                    <section className="col-9 vh-100">
                        <header className='ms-4 mt-3 overflow-hidden'>
                            <h1 className='mt-4 ms-4'>My Courses</h1>
                            <div className="input-group">
                                <div className="form-outline w-75 ms-4 mt-2">
                                    <label className="form-label" htmlFor="search-focus"></label>
                                    <input id="search-focus" type="search" className="form-control" placeholder="Search" onChange={e => setSearchInputValue(e.target.value)} />
                                </div>
                            </div>
                        </header>

                        <div className="container text-center mt-3">
                            <main className="row row-cols-3 bg-body g-5">
                                {
                                    courses
                                        .filter(course => course.price >= fromInputValue && course.price <= toInputValue)
                                        .filter(course => course.name.toLowerCase().includes(searchInputValue.toLowerCase()))
                                        .map((course, index) =>
                                            <div key={index} className="col p-3">
                                                <h3>{course.name}</h3>
                                                <h4>Category: {course.category}</h4>
                                                <img src='https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp' alt="mainPictureOfCourse" className='w-100' />
                                                <p className='text-center'>Price: {course.price}</p>
                                                <Link to={'/mycourses/'+index}>View Course</Link>
                                            </div>
                                        )
                                }
                            </main>
                        </div>

                    </section>

                    <aside className="col-3 vh-100 text-center">
                        <div className='h-auto'>
                            <RightNavBar />

                            {/* 
                            <div className="subject mt-5">
                                <h3>Subject</h3>
                                <select className="select form-select w-75 text-center m-auto" data-mdb-filter="true">
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div> */}

                            <div className="price mt-5">
                                <h3>Price</h3>
                                <p className='text-black-50' >from</p>
                                <input type="number" name="from" id="from" onChange={e => setFromInputValue(e.target.value)} />
                                <p className='text-black-50'>to</p>
                                <input type="number" name="to" id="to" onChange={e => setToInputValue(e.target.value)} />
                            </div>
                        </div>

                    </aside>

                </div>
            </div>
        </>
    )
}

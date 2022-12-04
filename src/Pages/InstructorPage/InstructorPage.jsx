import { Axios } from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header.jsx'
import RightNavBar from '../../components/RightNavBar/RightNavBar.jsx'
import CoursePage from '../CoursePage/CoursePage.jsx'
import './InstructorPage.css'


export default function InstructorPage() {
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
            <div class="container-fluid">
                <div class="row">

                    <section className="col-9 vh-100">

                        <div className='mt-3 overflow-hidden'>
                            <Header />
                        </div>

                        <div class="container text-center mt-3">
                            <main class="row row-cols-3 bg-body g-5">
                                {
                                    courses.map((course, index) =>
                                        <div key={index} className="col">
                                            <img src={course.mainPicture} alt="mainPictureOfCourse" /> 
                                            <p>Price: {course.price}</p>
                                            <Link to='index'></Link>
                                        </div>
                                    )
                                }
                            </main>
                        </div>

                    </section>

                    <aside class="col-3 vh-100 text-center">

                        <div className='h-auto'>
                            <RightNavBar />

                            <div className="subject mt-5">
                                <h3>Subject</h3>
                                <select class="select form-select w-75 text-center m-auto" data-mdb-filter="true">
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="price mt-5">
                                <h3>Price</h3>
                                <p className='text-black-50'>from</p>
                                <input type="number" name="from" id="from" />
                                <p className='text-black-50'>to</p>
                                <input type="number" name="to" id="to" />
                                <br />
                                <button type="submit" class="btn btn-primary mt-5" aria-label="Close">
                                    Apply Changes
                                </button>
                            </div>
                        </div>

                    </aside>

                </div>
            </div>
        </>
    )
}

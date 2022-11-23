import React from 'react'
import CourseFirstDiv from '../components/coursePage/CourseFirstDiv'
import CourseInstructorPlaceHolder from '../components/coursePage/CourseInstructorPlaceHolder'
import Sections from '../components/courseSections/Sections'
import Faqs from '../components/faq/Faqs'
import Layout from '../components/Layout'
import Reviews from '../components/reviews/Reviews'
import CurrentViewContext from '../context/CurrentViewContext'
import { useContext } from 'react'
const CoursePage = ({ navActiveState, setNavActiveState }) => {
    const { view } = useContext(CurrentViewContext);
    if (view === "course")
        return (
            <Layout >
                <CourseFirstDiv />
                <div className="mx-40 my-10 flex">
                    <div className='w-1/2'>
                        <CourseInstructorPlaceHolder />
                    </div>
                    <div className='w-1/2 shadow-2xl rounded-2xl'>
                        <iframe className='w-full rounded-2xl' width="520" height="340" src="https://www.youtube.com/embed/rfscVS0vtbw" title="Learn Python - Full Course for Beginners [Tutorial]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <Faqs visible={true} />
                <Sections visible={true} />
                <Reviews visible={true} />
            </Layout>
        )
}

export default CoursePage
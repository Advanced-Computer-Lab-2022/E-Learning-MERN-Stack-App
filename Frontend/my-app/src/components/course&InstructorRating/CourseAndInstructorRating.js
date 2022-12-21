import React from 'react'
import Rating from '@mui/material/Rating';
function instructorRate() {

}
function courseRate() {
    // 
}
const CourseAndInstructorRating = ({ courseRating, owned }) => {
    if (owned)
        return (
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 -my-16">
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-blue-500 dark:text-white">Review Your Experience</h2>
                <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2"></div>
                <div className=' flex flex-row'>
                    <div className='px-20 w-1/4 font-bold text-blue-500'>
                        Rate Instructor:
                    </div>
                    <div className=''>
                        <Rating name="half-rating" defaultValue={courseRating} precision={0.2} onClick={() => instructorRate()} />
                    </div>
                </div>
                <div className=' flex flex-row py-10'>
                    <div className='px-20 w-1/4 font-bold text-blue-500'>
                        Rate Course:
                    </div>
                    <div className=''>
                        <Rating name="half-rating" defaultValue={courseRating} precision={0.2} onClick={() => courseRate()} />
                    </div>
                </div>
            </div >
        )
}

export default CourseAndInstructorRating
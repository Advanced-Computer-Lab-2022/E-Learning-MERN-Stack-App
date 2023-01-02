import React from 'react'

const CourseInstructorPlaceHolder = ({ instructor }) => {
    return (

        <div className="mx-24 shadow-lg rounded-2xl w-96 bg-white h-full">
            <div className="rounded-t-lg h-28 w-full mb-4" />
            <div className="flex flex-col items-center justify-center p-4 -mt-16">
                <a href="#" className="block relative">
                    <img src={instructor.imgURL} className="mx-auto object-cover rounded-full h-16 w-16  border-2 border-white" />
                </a>
                <p className="text-gray-800  text-xl font-medium mt-2 mb-3">
                    {instructor.name}
                </p>

                <p className="text-xs p-2 bg-blue-500 text-white px-4 rounded-full">
                    {instructor.role}
                </p>
                <div className="rounded-lg p-2 w-full mt-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 ">
                        <p className="flex flex-col">
                            Courses
                            <span className="text-black font-bold">
                                {instructor.numberOfCourses}
                            </span>
                        </p>
                        <p className="flex flex-col">
                            Rating
                            <span className="text-black font-bold">
                                {instructor.rating}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CourseInstructorPlaceHolder
import React from 'react'

const CourseInstructorPlaceHolder = () => {
    return (

        <div class="mx-24 shadow-lg rounded-2xl w-96 bg-white h-full">
            <div class="rounded-t-lg h-28 w-full mb-4" />
            <div class="flex flex-col items-center justify-center p-4 -mt-16">
                <a href="#" class="block relative">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(21).jpg" class="mx-auto object-cover rounded-full h-16 w-16  border-2 border-white" />
                </a>
                <p class="text-gray-800  text-xl font-medium mt-2 mb-3">
                    Instructor Name
                </p>

                <p class="text-xs p-2 bg-blue-500 text-white px-4 rounded-full">
                    Lead Developer
                </p>
                <div class="rounded-lg p-2 w-full mt-4">
                    <div class="flex items-center justify-between text-sm text-gray-600 ">
                        <p class="flex flex-col">
                            Courses
                            <span class="text-black font-bold">
                                4
                            </span>
                        </p>
                        <p class="flex flex-col">
                            Rating
                            <span class="text-black font-bold">
                                5.0
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CourseInstructorPlaceHolder
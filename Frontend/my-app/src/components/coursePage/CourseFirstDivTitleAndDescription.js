import React from 'react'

const CourseFirstDivTitleAndDescription = ({ title, description }) => {
    return (
        <>
            <h3 class="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">
                {title}
            </h3>
            <p class="mt-6 text-base leading-6 text-gray-500">
                {description}
            </p>
        </>
    )
}

export default CourseFirstDivTitleAndDescription
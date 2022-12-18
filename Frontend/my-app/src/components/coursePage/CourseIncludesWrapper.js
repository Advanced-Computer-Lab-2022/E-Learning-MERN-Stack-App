import React from 'react'

const CourseIncludesWrapper = ({ children }) => {
    return (
        <>
            <div className="flex items-center">
                <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-blue-500">
                    This course includes
                </h4>
            </div>
            <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                {children}
            </ul>
        </>
    )
}

export default CourseIncludesWrapper
import React from 'react'

const CourseCardsWrapper = ({ children, headingText }) => {
    return (
        <>

            <h1 className=' px-10 py-3 font-bold text-lg  '> {headingText} </h1>
            <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
                {children}
            </div>
        </>
    )
}

export default CourseCardsWrapper
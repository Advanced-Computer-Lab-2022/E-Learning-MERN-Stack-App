import React from 'react'

const CourseCardsWrapper = ({ children, headingText }) => {
    return (
        <>
            {/* <img className='w-5 h-5 mx-10 ' src="./svg/rightArrow.svg" alt="rightArrowSVG" /> */}
            <h1 className=' px-10 py-3 font-bold text-lg  '> {headingText} <span className='text-gray-500 font-thin text-base'> (Best Sellers)</span></h1>
            <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
                {children}
            </div>
        </>
    )
}

export default CourseCardsWrapper
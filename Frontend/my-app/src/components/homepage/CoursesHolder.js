import React from 'react'
import FilterWholeTab from './FilterWholeTab'

const CoursesHolder = ({ children }) => {
    return (
        <div className='flex flex-row'>
            <FilterWholeTab />
            <div className='mx-4'>
                {children}
            </div>
        </div>
    )
}

export default CoursesHolder
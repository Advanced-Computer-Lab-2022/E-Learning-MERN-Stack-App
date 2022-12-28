import React from 'react'
import PricingFilters from './PricingFilters'
import RatingFilters from './RatingFilters'
import SearchInput from './SearchInput'
import SubjectFilters from './SubjectFilters'

const FilterWholeTab = () => {
    return (
        <div className='w-1/4'>
            <div className=' mx-10 my-5 rounded-lg shadow-xl shadow-blue-200'>
                <div className='py-8 px-6 text-blue-800 font-bold text-2xl'>
                    Filters:
                </div>
                <SearchInput />
                <div className='pb-10'>
                    <PricingFilters />
                    <SubjectFilters />
                    <RatingFilters />
                </div>
            </div>
        </div>
    )
}

export default FilterWholeTab
import React from 'react'
import { useContext } from 'react'
import CurrentViewContext from '../../context/CurrentViewContext'
const CourseFirstDivPricing = ({ price }) => {
    const { view } = useContext(CurrentViewContext);
    return (
        <div class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
            <p class="text-lg leading-6 font-bold text-gray-900">
                Monthly
            </p>
            <div class="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900">
                <span>
                    ${price}/mo
                </span>
            </div>
            <p class="mt-4 text-sm leading-5">

                <span class=" inline-block font-medium text-gray-500 ">
                    Price Including VAT
                </span>
            </p>
            <div class="mt-6">
                <div class="rounded-md shadow">
                    {view === 'course' ? [<button type="button" class="py-2 px-4  bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Sign In
                    </button>] : [<button type="button" class="py-2 px-4  bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Buy Now
                    </button>]}


                </div>
            </div>
        </div>
    )
}

export default CourseFirstDivPricing
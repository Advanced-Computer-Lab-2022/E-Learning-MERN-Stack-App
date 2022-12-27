import React from 'react'
import { useContext } from 'react'
import CurrentViewContext from '../../context/CurrentViewContext'
import UserInfoContext from '../../context/UserInfoContext'
import CourseBuyButton from './CourseBuyButton';
import NavStateContext from '../../context/NavStateContext';
const CourseFirstDivPricing = ({ price, owned }) => {
    const { view, setView } = useContext(CurrentViewContext);
    const { navIdx, setNavIdx } = useContext(NavStateContext);
    if (!owned)
        return (
            <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-bold text-gray-900">
                    Monthly
                </p>
                <div className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900">
                    <span>
                        ${price}/mo
                    </span>
                </div>
                <p className="mt-4 text-sm leading-5">

                    <span className=" inline-block font-medium text-gray-500 ">
                        Price Including VAT
                    </span>
                </p>
                <div className="mt-6">
                    <div className="rounded-md shadow">
                        {/* 
                        @TODO :: change view context method to user 
                        context method after integration 
                        */}
                        {view === 'guest' ? [
                            <button
                                onClick={() => {
                                    setNavIdx(5);
                                }}
                                type="button" className="py-2 px-4  bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Sign In
                            </button>] : [
                            <CourseBuyButton price={price} />
                        ]
                        }
                    </div>
                </div>
            </div>
        )
}

export default CourseFirstDivPricing
import React from 'react'

const CoursesHolder = ({ children }) => {
    return (
        <div className='flex flex-row'>
            <div className='w-1/4'>
                <div className=' mx-10 my-5 rounded-lg shadow-xl shadow-blue-200'>
                    <div className='py-8 px-6 text-blue-800 font-bold text-2xl'>
                        Filters:
                    </div>
                    <div className=' px-5 pb-5'>
                        <input placeholder='Something Specific? ' className='border-gray-300 rounded-l-lg  focus:border-blue-500 focus:outline-none border-2 h-10 px-3' />
                        <button className="h-10 items-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-3 rounded-r-lg" type="button" id="button-addon2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className='pb-10'>
                        <div className='px-12 text-xl pb-3 text-blue-500'>
                            Price
                        </div>
                        <div className="px-16 py-1">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="priceChkBox1" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                Free
                            </label>
                        </div>
                        <div className="px-16 py-1">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="priceChkBox1" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                0$ - 5$
                            </label>
                        </div>
                        <div className="px-16 py-1">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="priceChkBox1" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                5$ - 10$
                            </label>
                        </div>
                        <div className="px-16 py-1">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="priceChkBox1" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                Over 10$
                            </label>
                        </div>

                        <div className='px-12 text-xl py-3 text-blue-500'>
                            Subject
                        </div>
                        <div className="px-16 py-1">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="priceChkBox1" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                Web Development
                            </label>
                        </div>
                        <div className="px-16 py-1">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="priceChkBox1" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                Data Science
                            </label>
                        </div>
                        <div className="px-16 py-1">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="priceChkBox1" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                Security
                            </label>
                        </div>


                        <div className='px-12 text-xl py-3 text-blue-500'>
                            Rating
                        </div>
                        <div className="px-16 py-1">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="priceChkBox1" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                1 Star
                            </label>
                        </div>
                        <div className="px-16 py-1">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="priceChkBox1" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                2 Stars
                            </label>
                        </div>
                        <div className="px-16 py-1">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="priceChkBox1" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                3 Stars
                            </label>
                        </div>
                        <div className="px-16 py-1">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="priceChkBox1" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                4 Stars
                            </label>
                        </div>
                        <div className="px-16 py-1">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="priceChkBox1" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                5 Stars
                            </label>
                        </div>
                    </div>

                </div>
            </div>
            <div className='mx-4'>
                {children}
            </div>
        </div>
    )
}

export default CoursesHolder
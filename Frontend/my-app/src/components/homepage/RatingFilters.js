import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { FiltersContext } from '../../context/FiltersContext';

const RatingFilters = () => {
    const [cookies] = useCookies('token')
    const [selected, setSelected] = useState(-1);
    let { setRating, setMostPopular } = useContext(FiltersContext);


    return (
        <>
            <div className='px-12 text-xl py-3 text-blue-500'>
                Rating
            </div>
            <div className="px-16 py-1" onClick={() => { setSelected(-1); setRating(-1) }}>
                <input checked={selected === -1} className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                <label className="inline-block text-gray-800 cursor-pointer">
                    None
                </label>
            </div>
            <div className="px-16 py-1" onClick={() => { setSelected(0); setRating(1) }}>
                <input checked={selected === 0} className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                <label className="inline-block text-gray-800 cursor-pointer">
                    1 Star
                </label>
            </div>
            <div className="px-16 py-1" onClick={() => { setSelected(1); setRating(2) }}>
                <input checked={selected === 1} className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                <label className="inline-block text-gray-800 cursor-pointer">
                    2 Stars
                </label>
            </div>
            <div className="px-16 py-1" onClick={() => { setSelected(2); setRating(3) }}>
                <input checked={selected === 2} className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                <label className="inline-block text-gray-800 cursor-pointer">
                    3 Stars
                </label>
            </div>
            <div className="px-16 py-1" onClick={() => { setSelected(3); setRating(4) }} >
                <input checked={selected === 3} className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                <label className="inline-block text-gray-800 cursor-pointer">
                    4 Stars
                </label>
            </div>
            <div className="px-16 py-1" onClick={() => { setSelected(4); setRating(5) }}>
                <input checked={selected === 4} className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                <label className="inline-block text-gray-800 cursor-pointer">
                    5 Stars
                </label>
            </div>
            {/* <div className="px-16 py-1" onClick={() => { setSelected(5); setMostPopular(true) }}>
                <input checked={selected === 4} className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                <label className="inline-block text-gray-800 cursor-pointer">
                    View Most Popular Courses
                </label>
            </div> */}
        </>
    )
}

export default RatingFilters
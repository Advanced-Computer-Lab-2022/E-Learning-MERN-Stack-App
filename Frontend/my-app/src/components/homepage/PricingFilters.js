import React from 'react'
import { useState } from 'react'
const PricingFilters = () => {
    const [selected, setSelected] = useState(-1);
    return (
        <>
            <div className='px-12 text-xl pb-3 text-blue-500'>
                Price
            </div>
            <div className="px-16 py-1" onClick={() => setSelected(-1)}>
                <input checked={selected === -1} className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                <label className="inline-block text-gray-800 cursor-pointer">
                    None
                </label>
            </div>
            <div className="px-16 py-1" onClick={() => setSelected(0)}>
                <input checked={selected === 0} className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                <label className="inline-block text-gray-800 cursor-pointer">
                    Free
                </label>
            </div>
            <div className="px-16 py-1" onClick={() => setSelected(1)}>
                <input checked={selected === 1} className=" appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                <label className="inline-block text-gray-800 cursor-pointer">
                    0$ - 5$
                </label>
            </div>
            <div className="px-16 py-1" onClick={() => setSelected(2)}>
                <input checked={selected === 2} className=" appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                <label className=" inline-block text-gray-800 cursor-pointer">
                    5$ - 10$
                </label>
            </div>
            <div className="px-16 py-1" onClick={() => setSelected(3)}>
                <input checked={selected === 3} className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                <label className="inline-block text-gray-800 cursor-pointer">
                    Over 10$
                </label>
            </div>
        </>
    )
}

export default PricingFilters
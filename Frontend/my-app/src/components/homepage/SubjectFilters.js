import React, { useContext } from 'react'
import { useState } from 'react'
import { FiltersContext } from '../../context/FiltersContext';
const SubjectFilters = () => {
    const [selected, setSelected] = useState(-1);
    const { allCategories, setSelectedCategory } = useContext(FiltersContext);

    return (
        <>
            <div className='px-12 text-xl py-3 text-blue-500'>
                Subject
            </div>
            <div className="px-16 py-1" onClick={() => { setSelected(-1); setSelectedCategory(''); }}>
                <input checked={selected === -1} className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                <label className="inline-block text-gray-800 cursor-pointer">
                    None
                </label>
            </div>
            {
                allCategories.map((category, index) =>
                    <div className="px-16 py-1" onClick={() => { setSelected(index); setSelectedCategory(category); }}>
                        <input checked={selected === index} className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                        <label className="inline-block text-gray-800 cursor-pointer">
                            {category}
                        </label>
                    </div>
                )
            }
            {/* <div className="px-16 py-1" onClick={() => setSelected(0)}>
                <input checked={selected === 0} className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                <label className="inline-block text-gray-800 cursor-pointer">
                    Web Development
                </label>
            </div>
            <div className="px-16 py-1" onClick={() => setSelected(1)}>
                <input checked={selected === 1} className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                <label className="inline-block text-gray-800 cursor-pointer">
                    Data Science
                </label>
            </div>
            <div className="px-16 py-1" onClick={() => setSelected(2)}>
                <input checked={selected === 2} className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                <label className="inline-block text-gray-800 cursor-pointer">
                    Security
                </label>
            </div> */}
        </>
    )
}

export default SubjectFilters
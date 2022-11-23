import React from 'react'
import { useContext } from 'react';
import NavStateContext from '../../context/NavStateContext';
const MainNavCTAButtons = () => {
    const { navIdx, setNavIdx } = useContext(NavStateContext);
    return (
        <>

            {navIdx !== 5 ? [<a onClick={() => setNavIdx(5)} className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</a>] : []}
            {navIdx !== 6 ? [<a onClick={() => setNavIdx(6)} className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a>] : []}
        </>
    )
}

export default MainNavCTAButtons
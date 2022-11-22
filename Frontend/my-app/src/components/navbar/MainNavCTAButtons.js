import React from 'react'

const MainNavCTAButtons = ({ navActiveState, setNavActiveState }) => {
    return (
        <>

            {navActiveState !== 5 ? [<a onClick={() => setNavActiveState(5)} className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</a>] : []}
            {navActiveState !== 6 ? [<a onClick={() => setNavActiveState(6)} className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a>] : []}
        </>
    )
}

export default MainNavCTAButtons
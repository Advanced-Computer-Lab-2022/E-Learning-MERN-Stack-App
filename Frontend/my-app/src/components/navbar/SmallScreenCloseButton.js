import React from 'react'

const SmallScreenCloseButton = ({ setActiveSmallScreen }) => {
    return (
        <button className="navbar-close" onClick={() => setActiveSmallScreen(false)}>
            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
    )
}

export default SmallScreenCloseButton
import React from 'react'
import { useContext } from 'react'
import NavStateContext from '../../context/NavStateContext'
import CurrentViewContext from '../../context/CurrentViewContext'
const SmallScreenCTAButtons = ({ setActiveSmallScreen }) => {
    const { setNavIdx } = useContext(NavStateContext);
    const { setView } = useContext(CurrentViewContext);
    return (
        <div className="mt-auto">
            <div className="pt-6">
                <a
                    onClick={() => {
                        setActiveSmallScreen(false);
                        setNavIdx(5);
                        setView('guest');
                    }}
                    className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl cursor-pointer">Sign in</a>
                <a
                    onClick={() => {
                        setActiveSmallScreen(false);
                        setNavIdx(6);
                        setView('guest');
                    }}
                    className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl cursor-pointer">Sign Up</a>
            </div>
        </div>
    )
}

export default SmallScreenCTAButtons
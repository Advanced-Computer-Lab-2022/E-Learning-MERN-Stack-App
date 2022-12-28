import React from 'react'
import { useContext } from 'react';
import NavStateContext from '../../context/NavStateContext';
import CurrentViewContext from '../../context/CurrentViewContext';
import UserInfoContext from '../../context/UserInfoContext';
const MainNavCTAButtons = () => {
    const { navIdx, setNavIdx } = useContext(NavStateContext);
    const { setView } = useContext(CurrentViewContext);
    const { user } = useContext(UserInfoContext);
    return (
        <>
            {navIdx !== 5 ? [<div onClick={() => {
                setNavIdx(5)
                if (user.username === undefined)
                    setView('guest')
                else
                    setView('user')
            }} className="hidden cursor-pointer lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200">Sign In</div>] : []}
            {navIdx !== 6 ? [<div onClick={() => {
                setNavIdx(6)
                if (user.username === undefined)
                    setView('guest')
                else
                    setView('user')
            }} className="hidden cursor-pointer lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200">Sign up</div>] : []}
          
        </>
    )
}

export default MainNavCTAButtons
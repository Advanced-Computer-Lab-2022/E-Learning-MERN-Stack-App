import React, { useContext } from 'react'
import CurrentViewContext from '../../context/CurrentViewContext';
import NavStateContext from '../../context/NavStateContext'

const NavBarLogo = () => {
    const { setNavIdx } = useContext(NavStateContext);
    const { setView } = useContext(CurrentViewContext);
    return (
        <a className="text-3xl font-bold leading-none" href="#" onClick={() => {
            setNavIdx(0)
            setView('guest')
        }}>
            <div className='bg-black text-white px-2 py-1'>ACL.</div>
        </a>

    )
}

export default NavBarLogo
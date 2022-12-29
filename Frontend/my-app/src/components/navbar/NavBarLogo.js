import React, { useContext } from 'react'
import CurrentViewContext from '../../context/CurrentViewContext';
import NavStateContext from '../../context/NavStateContext'
import UserInfoContext from '../../context/UserInfoContext';
const NavBarLogo = () => {
    const { setNavIdx } = useContext(NavStateContext);
    const { setView } = useContext(CurrentViewContext);
    const { user } = useContext(UserInfoContext)
    return (
        <div className="text-3xl font-bold leading-none cursor-pointer" href="#" onClick={() => {
            setNavIdx(0)
            if (user.userName === undefined)
                setView('guest')
            else
                setView('user')
        }}>
            <div className='bg-black text-white px-2 py-1'>ACL.</div>
        </div>

    )
}

export default NavBarLogo
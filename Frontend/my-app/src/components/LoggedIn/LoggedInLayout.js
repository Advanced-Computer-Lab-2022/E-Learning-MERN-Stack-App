import React, { useContext, useEffect } from 'react'
import NavBarLogo from '../navbar/NavBarLogo'
import MainNavList from '../navbar/MainNavList'
import Footer from '../footer/Footer'
import ProfileIconNavBar from './ProfileIconNavBar'
import NavStateContext from '../../context/NavStateContext'
import CurrentViewContext from '../../context/CurrentViewContext'
import UserInfoContext from '../../context/UserInfoContext'
import { Cookies, useCookies } from 'react-cookie'

const LoggedInLayout = ({ children }) => {
    const { navIdx, setNavIdx } = useContext(NavStateContext);
    const { setView } = useContext(CurrentViewContext);
    const { user, setUser } = useContext(UserInfoContext);
    const [removeCookie] = useCookies(['userCookie'])

    function handleSignOut() {
        new Cookies().remove('userCookie');
        new Cookies().remove('token');
        window.location.reload()
    }

    return (
        <>
            <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
                <NavBarLogo />
                <MainNavList />
                <ProfileIconNavBar />
            </nav>
            <div className='flex m-5'>
                <div onClick={() => {
                    handleSignOut();
                }} className="hidden cursor-pointer lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold  rounded-xl transition duration-200">Sign out</div>
            </div>
            {children}
            <Footer />
        </>

    )
}

export default LoggedInLayout
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
                <div onClick={() => {
                    handleSignOut();
                }} className="hidden cursor-pointer lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200">Sign out</div>
            </nav>
            {children}
            <Footer />
        </>

    )
}

export default LoggedInLayout
import React from 'react'
import NavBarLogo from '../navbar/NavBarLogo'
import MainNavList from '../navbar/MainNavList'
import Footer from '../footer/Footer'
import ProfileIconNavBar from './ProfileIconNavBar'
const LoggedInLayout = ({ children }) => {
    return (
        <>
            <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
                <NavBarLogo />
                <MainNavList />
                <ProfileIconNavBar />
            </nav>
            {children}
            <Footer />
        </>

    )
}

export default LoggedInLayout
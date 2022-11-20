import React from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

const Layout = ({ children, navActiveState, setNavActiveState }) => {
    return (
        <>
            <Navbar
                navActiveState={navActiveState}
                setNavActiveState={setNavActiveState}
            />
            {children}
            <Footer />
        </>
    )
}

export default Layout
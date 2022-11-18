import React from 'react'
import { useState } from 'react'
import BurgerMenu from './BurgerMenu'
import MainNavCTAButtons from './MainNavCTAButtons'
import MainNavList from './MainNavList'
import NavBarLogo from './NavBarLogo'
import SmallScreenMenu from './SmallScreenMenu'

const Navbar = () => {
    const [activeSmallScreen, setActiveSmallScreen] = useState(false);
    return (
        <>
            <nav class="relative px-4 py-4 flex justify-between items-center bg-white">
                <NavBarLogo />
                <BurgerMenu setActiveSmallScreen={setActiveSmallScreen} />
                <MainNavList />
                <MainNavCTAButtons />
            </nav>
            <SmallScreenMenu isActive={activeSmallScreen} setActiveSmallScreen={setActiveSmallScreen} />
        </>
    )
}

export default Navbar
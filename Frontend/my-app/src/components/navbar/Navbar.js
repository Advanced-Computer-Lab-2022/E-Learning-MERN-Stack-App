import React from 'react'
import { useState } from 'react'
import BurgerMenu from './BurgerMenu'
import MainNavCTAButtons from './MainNavCTAButtons'
import MainNavList from './MainNavList'
import NavBarLogo from './NavBarLogo'
import SmallScreenMenu from './SmallScreenMenu'

const Navbar = ({ navActiveState, setNavActiveState }) => {
    const [activeSmallScreen, setActiveSmallScreen] = useState(false);
    return (
        <>
            <nav class="relative px-4 py-4 flex justify-between items-center bg-white">
                <NavBarLogo setNavActiveState={setNavActiveState} />
                <BurgerMenu setActiveSmallScreen={setActiveSmallScreen} />
                <MainNavList
                    navActiveState={navActiveState}
                    setNavActiveState={setNavActiveState}
                />
                <MainNavCTAButtons
                    navActiveState={navActiveState}
                    setNavActiveState={setNavActiveState}
                />
            </nav>
            <SmallScreenMenu isActive={activeSmallScreen} setActiveSmallScreen={setActiveSmallScreen} />
        </>
    )
}

export default Navbar
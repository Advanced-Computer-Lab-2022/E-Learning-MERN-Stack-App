import React from 'react'
import SmallScreenCTAButtons from './SmallScreenCTAButtons'
import SmallScreenHeader from './SmallScreenHeader'
import SmallScreenList from './SmallScreenList'

const SmallScreenMenu = ({ isActive, setActiveSmallScreen }) => {

    return (
        <div className={isActive ? "navbar-menu relative z-50" : "navbar-menu relative z-50 hidden"} >
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                <SmallScreenHeader setActiveSmallScreen={setActiveSmallScreen} />
                <SmallScreenList setActiveSmallScreen={setActiveSmallScreen} />
                <SmallScreenCTAButtons setActiveSmallScreen={setActiveSmallScreen} />
            </nav>
        </div >
    )
}

export default SmallScreenMenu
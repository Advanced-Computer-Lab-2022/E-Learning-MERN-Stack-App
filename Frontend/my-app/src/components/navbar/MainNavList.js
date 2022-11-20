import React from 'react'
import MainNavListItem from './MainNavListItem'
import MainNavListSeparator from './MainNavListSeparator'
const MainNavList = ({ navActiveState, setNavActiveState }) => {
    return (
        <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <MainNavListItem
                text={"Home"}
                href="#"
                active={navActiveState === 0}
                setActive={setNavActiveState}
                myIdx={0}
            />
            <MainNavListSeparator />
            <MainNavListItem
                text={"Categories"}
                href="#"
                active={navActiveState === 1}
                setActive={setNavActiveState}
                myIdx={1}
            />
            <MainNavListSeparator />
            <MainNavListItem
                text={"Services"}
                href="#"
                active={navActiveState === 2}
                setActive={setNavActiveState}
                myIdx={2}
            />
            <MainNavListSeparator />
            <MainNavListItem
                text={"Teach With Us"}
                href="#"
                active={navActiveState === 3}
                setActive={setNavActiveState}
                myIdx={3}
            />
            <MainNavListSeparator />
            <MainNavListItem
                text={"Contact Us"}
                href="#"
                active={navActiveState === 4}
                setActive={setNavActiveState}
                myIdx={4}
            />
        </ul>
    )
}

export default MainNavList
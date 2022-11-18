import React from 'react'
import MainNavListItem from './MainNavListItem'
import MainNavListSeparator from './MainNavListSeparator'
import { useState } from 'react'

const MainNavList = () => {
    const [active, setActive] = useState(0);
    return (
        <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <MainNavListItem
                text={"Home"}
                href="#"
                active={active === 0}
                setActive={setActive}
                myIdx={0}
            />
            <MainNavListSeparator />
            <MainNavListItem
                text={"Categories"}
                href="#"
                active={active === 1}
                setActive={setActive}
                myIdx={1}
            />
            <MainNavListSeparator />
            <MainNavListItem
                text={"Services"}
                href="#"
                active={active === 2}
                setActive={setActive}
                myIdx={2}
            />
            <MainNavListSeparator />
            <MainNavListItem
                text={"Teach With Us"}
                href="#"
                active={active === 3}
                setActive={setActive}
                myIdx={3}
            />
            <MainNavListSeparator />
            <MainNavListItem
                text={"Contact Us"}
                href="#"
                active={active === 4}
                setActive={setActive}
                myIdx={4}
            />
        </ul>
    )
}

export default MainNavList
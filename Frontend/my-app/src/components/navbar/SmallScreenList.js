import React from 'react'
import SmallScreenListItem from './SmallScreenListItem'

const SmallScreenList = ({ setActiveSmallScreen }) => {
    return (
        <ul>
            <div onClick={() => setActiveSmallScreen(false)}>
                <SmallScreenListItem text={"Home"} href="#" myIdx={0} />
            </div>
            <div onClick={() => setActiveSmallScreen(false)}>
                <SmallScreenListItem text={"Categories"} href="#" myIdx={1} />
            </div>
            <div onClick={() => setActiveSmallScreen(false)}>
                <SmallScreenListItem text={"Services"} href="#" myIdx={2} />
            </div>
            <div onClick={() => setActiveSmallScreen(false)}>
                <SmallScreenListItem text={"Teach With Us"} href="#" myIdx={3} />
            </div>
            <div onClick={() => setActiveSmallScreen(false)}>
                <SmallScreenListItem text={"Contact Us"} href="#" myIdx={4} />
            </div>
        </ul>
    )
}

export default SmallScreenList
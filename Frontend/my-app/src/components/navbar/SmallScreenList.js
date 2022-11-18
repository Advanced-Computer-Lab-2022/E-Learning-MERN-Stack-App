import React from 'react'
import SmallScreenListItem from './SmallScreenListItem'

const SmallScreenList = () => {
    return (
        <ul>
            <SmallScreenListItem text={"Home"} href="#" />
            <SmallScreenListItem text={"Categories"} href="#" />
            <SmallScreenListItem text={"Services"} href="#" />
            <SmallScreenListItem text={"Teach With Us"} href="#" />
            <SmallScreenListItem text={"Contact Us"} href="#" />
        </ul>
    )
}

export default SmallScreenList
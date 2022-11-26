import React from 'react'
import SmallScreenListItem from './SmallScreenListItem'
import { useContext } from 'react';
import CurrentViewContext from '../../context/CurrentViewContext';
const SmallScreenList = ({ setActiveSmallScreen }) => {
    const { setView } = useContext(CurrentViewContext);
    return (
        <ul>
            <div onClick={() => {
                setActiveSmallScreen(false)
                setView('guest')
            }}>
                <SmallScreenListItem text={"Home"} href="#" myIdx={0} />
            </div>
            <div onClick={() => {
                setActiveSmallScreen(false)
                setView('guest')
            }}>
                <SmallScreenListItem text={"Categories"} href="#" myIdx={1} />
            </div>
            <div onClick={() => {
                setActiveSmallScreen(false)
                setView('guest')
            }}>
                <SmallScreenListItem text={"Services"} href="#" myIdx={2} />
            </div>
            {/* <div onClick={() => {
                setActiveSmallScreen(false)
                setView('guest')
            }}>
                <SmallScreenListItem text={"Teach With Us"} href="#" myIdx={3} />
            </div> */}
            <div onClick={() => {
                setActiveSmallScreen(false)
                setView('guest')
            }}>
                <SmallScreenListItem text={"Contact Us"} href="#" myIdx={4} />
            </div>
        </ul>
    )
}

export default SmallScreenList
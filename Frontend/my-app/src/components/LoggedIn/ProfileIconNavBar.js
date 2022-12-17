import React from 'react'
import { useContext } from 'react';
import NavStateContext from '../../context/NavStateContext';
const ProfileIconNavBar = () => {
    const { setNavIdx } = useContext(NavStateContext);
    return (

        <div className="relative block cursor-pointer" onClick={
            () => {
                setNavIdx(8);
            }
        }>
            < img alt="profileImg" src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="mx-auto object-cover rounded-full h-16 w-16 mx-10 my-1" />
        </div >

    )
}

export default ProfileIconNavBar
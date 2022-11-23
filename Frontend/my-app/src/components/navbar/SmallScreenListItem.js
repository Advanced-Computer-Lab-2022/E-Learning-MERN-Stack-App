import React from 'react'
import { useContext } from 'react'
import NavStateContext from '../../context/NavStateContext'
const SmallScreenListItem = ({ text, href, myIdx }) => {
    const { setNavIdx } = useContext(NavStateContext)
    return (
        <li class="mb-1">
            <a onClick={() => setNavIdx(myIdx)} class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href={href}>{text}</a>
        </li>
    )
}

export default SmallScreenListItem
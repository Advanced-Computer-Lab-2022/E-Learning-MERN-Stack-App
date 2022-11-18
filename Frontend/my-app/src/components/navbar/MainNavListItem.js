import React from 'react'
const MainNavListItem = ({ text, href, active, setActive, myIdx }) => {
    if (!active) {
        return (
            <li onClick={() => setActive(myIdx)}>
                <a class="text-sm text-gray-400 hover:text-gray-500" href={href}>{text}</a>
            </li>
        )
    } else {
        return (
            <li onClick={() => setActive(myIdx)}>
                <a class="text-sm text-blue-600 font-bold" href={href}>{text}</a>
            </li>
        )
    }
}
export default MainNavListItem
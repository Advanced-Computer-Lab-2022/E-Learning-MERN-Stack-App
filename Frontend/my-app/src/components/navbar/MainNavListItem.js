
import NavStateContext from '../../context/NavStateContext'
import React, { useContext } from 'react'
const MainNavListItem = ({ text, href, myIdx }) => {
    const { navIdx, setNavIdx } = useContext(NavStateContext);
    if (navIdx !== myIdx) {
        return (
            <li onClick={() => setNavIdx(myIdx)}>
                <a class="text-sm text-gray-400 hover:text-gray-500" href={href}>{text}</a>
            </li>
        )
    } else {
        return (
            <li onClick={() => setNavIdx(myIdx)}>
                <a class="text-sm text-blue-600 font-bold" href={href}>{text}</a>
            </li>
        )
    }
}
export default MainNavListItem
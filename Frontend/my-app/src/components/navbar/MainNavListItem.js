
import NavStateContext from '../../context/NavStateContext'
import React, { useContext } from 'react'
import CurrentViewContext from '../../context/CurrentViewContext';
const MainNavListItem = ({ text, href, myIdx }) => {
    const { navIdx, setNavIdx } = useContext(NavStateContext);
    const { setView } = useContext(CurrentViewContext);
    if (navIdx !== myIdx) {
        return (
            <li onClick={() => {
                setNavIdx(myIdx)
                setView('guest')
            }}>
                <a class="text-sm text-gray-400 hover:text-gray-500" href={href}>{text}</a>
            </li>
        )
    } else {
        return (
            <li onClick={() => {
                setNavIdx(myIdx)
                setView('guest')
            }}>
                <a class="text-sm text-blue-600 font-bold" href={href}>{text}</a>
            </li>
        )
    }
}
export default MainNavListItem
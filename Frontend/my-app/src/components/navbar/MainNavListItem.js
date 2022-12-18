
import NavStateContext from '../../context/NavStateContext'
import React, { useContext } from 'react'
import CurrentViewContext from '../../context/CurrentViewContext';
import UserInfoContext from '../../context/UserInfoContext';
const MainNavListItem = ({ text, href, myIdx }) => {
    const { navIdx, setNavIdx } = useContext(NavStateContext);
    const { setView } = useContext(CurrentViewContext);
    const { user } = useContext(UserInfoContext);
    if (navIdx !== myIdx) {
        return (
            <li onClick={() => {
                setNavIdx(myIdx)
                if (user.username === undefined)
                    setView('guest')
                else
                    setView('user')
            }}>
                <a className="text-sm text-gray-400 hover:text-gray-500" href={href}>{text}</a>
            </li>
        )
    } else {
        return (
            <li onClick={() => {
                setNavIdx(myIdx)
                if (user.username === undefined)
                    setView('guest')
                else
                    setView('user')
            }}>
                <a className="text-sm text-blue-600 font-bold" href={href}>{text}</a>
            </li>
        )
    }
}
export default MainNavListItem
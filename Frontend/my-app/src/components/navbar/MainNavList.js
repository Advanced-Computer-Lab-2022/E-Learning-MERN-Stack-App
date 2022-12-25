import { useContext } from 'react'
import UserInfoContext from '../../context/UserInfoContext';
import MainNavListItem from './MainNavListItem'
import MainNavListSeparator from './MainNavListSeparator'

const MainNavList = () => {
    const { user } = useContext(UserInfoContext);
    return (
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <MainNavListItem
                text={"Home"}
                href="#"
                myIdx={0}
            />
            <MainNavListSeparator />
            <MainNavListItem
                text={"Categories"}
                href="#"
                myIdx={1}
            />
            <MainNavListSeparator />
            <MainNavListItem
                text={"Services"}
                href="#"
                myIdx={2}
            />
            <MainNavListSeparator />
            <MainNavListItem
                text={"Contact Us"}
                href="#"
                myIdx={4}
            />
            {
                (user.role === 'instructor')
                    ?
                    <>
                        <MainNavListSeparator />
                        <MainNavListItem
                            text={"Courses I Teach"}
                            href="#"
                            myIdx={64} />
                    </>
                    : ''
            }
            {
                (user.role === 'instructor')
                    ?
                    <>
                        <MainNavListSeparator />
                        <MainNavListItem
                            text={"Create a Course"}
                            href="#"
                            myIdx={65} />
                    </>
                    : ''
            }
            {
                (user.role === 'admin')
                    ?
                    <>
                        <MainNavListSeparator />
                        <MainNavListItem
                            text={"Admin Dashboard"}
                            href="#"
                            myIdx={128} />
                    </>
                    : ''
            }
            {
                (user.role === 'normalTrainee' || user.role === 'corporateTrainee')
                    ?
                    <>
                        <MainNavListSeparator />
                        <MainNavListItem
                            text={"Courses I Take"}
                            href="#"
                            myIdx={256} />
                    </>
                    : ''
            }
        </ul>
    )
}

export default MainNavList
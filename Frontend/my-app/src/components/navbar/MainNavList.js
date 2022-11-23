import MainNavListItem from './MainNavListItem'
import MainNavListSeparator from './MainNavListSeparator'
const MainNavList = () => {
    return (
        <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
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
                text={"Teach With Us"}
                href="#"
                myIdx={3}
            />
            <MainNavListSeparator />
            <MainNavListItem
                text={"Contact Us"}
                href="#"
                myIdx={4}
            />
        </ul>
    )
}

export default MainNavList
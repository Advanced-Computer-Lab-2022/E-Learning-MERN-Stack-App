import React, { useContext, useState } from 'react'
import UserInfoContext from '../../context/UserInfoContext'
import NavStateContext from '../../context/NavStateContext'
import CurrentViewContext from '../../context/CurrentViewContext'
import axios from 'axios'
const LoginForm = () => {
    const { setUser } = useContext(UserInfoContext)
    const { setNavIdx } = useContext(NavStateContext)
    const { setView } = useContext(CurrentViewContext)

    const [authenticationInfo, setAuthenticationInfo] = useState({
        userName: "",
        password: ""
    });


    async function handleSubmit(e) {
        await axios.post('http://localhost:8000/api/guest/signin', authenticationInfo)
            .then((response) => {
                console.log(response);
                setUser(response.data.guest);
            })
            .catch((error) => console.log(error));

        setNavIdx(0);
        setView('user')
    }

    function handleUsernameChange(e) {
        setAuthenticationInfo({
            ...authenticationInfo,
            userName: e.target.value
        });
        console.log(authenticationInfo);
    }
    function handlePasswordChange(e) {
        setAuthenticationInfo({
            ...authenticationInfo,
            password: e.target.value
        });
        console.log(authenticationInfo);
    }

    return (
        <form className="flex flex-col pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                            </path>
                        </svg>
                    </span>
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Username" onChange={(e) => handleUsernameChange(e)} />
                </div>
            </div>
            <div className="flex flex-col pt-4 mb-12">
                <div className="flex relative ">
                    <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                            </path>
                        </svg>
                    </span>
                    <input type="password" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Password" onChange={(e) => handlePasswordChange(e)} />
                </div>
            </div>
            <button type="button" className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-500 shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
                onClick={(e) =>
                    // const getUser = {
                    //     email: "minahannalla@domain.com",
                    //     country: "Egypt",
                    //     favoriteLanguage: "English",
                    //     firstName: "Mina",
                    //     lastName: "Hannalla",
                    //     username: "mina.hannalla123",
                    //     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate felis eget risus tempus, a faucibus ex posuere. Ut aliquam consequat metus at maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae semper dui. Curabitur hendrerit sed enim sit amet pulvinar.",
                    //     ownedCoursesIdxs: [1052, 1514, 1236]
                    // }
                    // setUser(getUser);
                    // setNavIdx(0);
                    // setView('user')
                    handleSubmit(e)
                }
            >
                <span className="w-full">
                    Sign In
                </span>
            </button>
        </form >
    )
}

export default LoginForm
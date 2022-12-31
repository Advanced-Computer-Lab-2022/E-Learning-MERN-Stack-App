import React, { useContext, useState } from 'react';
import UserInfoContext from '../../context/UserInfoContext';
import NavStateContext from '../../context/NavStateContext';
import CurrentViewContext from '../../context/CurrentViewContext';
import axios from 'axios'
import { useCookies } from 'react-cookie';

const LoginForm = () => {
    const { user, setUser } = useContext(UserInfoContext);
    const { setNavIdx } = useContext(NavStateContext);
    const { view, setView } = useContext(CurrentViewContext);
    const [cookies, setCookie] = useCookies(['token']);
    const [userCookie, setUserCookie] = useCookies(['userCookie']);

    const [authenticationInfo, setAuthenticationInfo] = useState({
        userName: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [api, setApi] = useState('http://localhost:8000/api/guest/signin');
    // const [apis, setApis] = useState([
    //     'http://localhost:8000/api/guest/signin',
    //     'http://localhost:8000/api/instructor/signin',
    //     'http://localhost:8000/api/admin/signin'
    // ])
    // var userRole = 'individualTrainee';
    const [userRole, setUserRole] = useState('individualTrainee');

    // async function handleSubmit() {
    //     for (let i = 0; i < apis.length; ++i) {
    //         await axios.post(apis[i], authenticationInfo)
    //             .then((res) => {
    //                 console.log(res);
    //                 if (res.data.guest !== undefined) {
    //                     setCookie('token', res.data.token, { path: '/' });
    //                     setCookie('userCookie', JSON.stringify(res.data.guest));
    //                     setNavIdx(0);
    //                     setView('user');
    //                     // setUser(res.data.guest);
    //                     return;
    //                 }
    //                 else if (res.data.instructor !== undefined) {
    //                     setCookie('token', res.data.token, { path: '/' });
    //                     setCookie('userCookie', JSON.stringify(res.data.instructor));
    //                     setNavIdx(0);
    //                     setView('user');
    //                     // setUser(res.data.instructor);
    //                     return;
    //                 }
    //                 else if (res.data.admin !== undefined) {
    //                     setCookie('token', res.data.token, { path: '/' });
    //                     setCookie('userCookie', JSON.stringify(res.data.admin));
    //                     // setUser(res.data.admin);
    //                     // setNavIdx(0);
    //                     setView('user');
    //                     return;
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //                 switch (error.code) {
    //                     case 'ERR_BAD_REQUEST':
    //                         setErrorMessage('Username or password is incorrect, please try again');
    //                         break;
    //                     case 'ERR_NETWORK':
    //                         setErrorMessage(`Please make sure you're connected to the internet`);
    //                         break;
    //                     default:
    //                 }
    //             })
    //     }
    // }


    // async function handleSubmit(e) {
    //     await axios.post(api, authenticationInfo)
    //         .then((response) => {
    //             console.log(response);

    //             let userToBeSet = response.data.guest;
    //             switch (userRole) {
    //                 case 'individualTrainee':
    //                     userToBeSet = response.data.guest;
    //                     break;
    //                 case 'corporateTrainee':
    //                     userToBeSet = response.data.guest;
    //                     break;
    //                 case 'instructor':
    //                     userToBeSet = response.data.instructor;
    //                     break;
    //                 case 'admin':
    //                     userToBeSet = response.data.admin;
    //                     break;
    //                 default:
    //             }
    //             // if (userToBeSet !== undefined)
    //             setUser(userToBeSet);
    //             setNavIdx(0);
    //             setView('user');
    //             setCookie('token', response.data.token, { path: '/' });
    //             setCookie('userCookie', JSON.stringify(userToBeSet));
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             switch (error.code) {
    //                 case 'ERR_BAD_REQUEST':
    //                     setErrorMessage('Username or password is incorrect, please try again');
    //                     break;
    //                 case 'ERR_NETWORK':
    //                     setErrorMessage(`Please make sure you're connected to the internet`);
    //                     break;
    //                 default:
    //             }
    //         });

    // }

    async function handleSubmit1(e) {
        await axios.post('http://localhost:8000/api/guest/signin', authenticationInfo)
            .then((response) => {
                console.log(response);
                setUser(response.data?.guest);
                setNavIdx(0);
                setView('user');
                setCookie('token', response.data.token, { path: '/' });
                setCookie('userCookie', JSON.stringify(response.data?.guest));
            })
            .catch((error) => {
                console.log(error);
                switch (error.code) {
                    case 'ERR_BAD_REQUEST':
                        setErrorMessage('Username or password is incorrect, please try again');
                        break;
                    case 'ERR_NETWORK':
                        setErrorMessage(`Please make sure you're connected to the internet`);
                        break;
                    default:
                }
            });
    }
    async function handleSubmit2(e) {
        await axios.post('http://localhost:8000/api/instructor/signin', authenticationInfo)
            .then((response) => {
                console.log(response);
                setUser(response.data?.instructor);
                setNavIdx(0);
                setView('user');
                setCookie('token', response.data.token, { path: '/' });
                setCookie('userCookie', JSON.stringify(response.data?.instructor));
            })
            .catch((error) => {
                console.log(error);
                switch (error.code) {
                    case 'ERR_BAD_REQUEST':
                        setErrorMessage('Username or password is incorrect, please try again');
                        break;
                    case 'ERR_NETWORK':
                        setErrorMessage(`Please make sure you're connected to the internet`);
                        break;
                    default:
                }
            });
    }
    async function handleSubmit3(e) {
        await axios.post('http://localhost:8000/api/admin/signin', authenticationInfo)
            .then((response) => {
                console.log(response);
                setUser(response.data?.admin);
                setNavIdx(0);
                setView('user');
                setCookie('token', response.data.token, { path: '/' });
                setCookie('userCookie', JSON.stringify(response.data?.admin));
            })
            .catch((error) => {
                console.log(error);
                switch (error.code) {
                    case 'ERR_BAD_REQUEST':
                        setErrorMessage('Username or password is incorrect, please try again');
                        break;
                    case 'ERR_NETWORK':
                        setErrorMessage(`Please make sure you're connected to the internet`);
                        break;
                    default:
                }
            });
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
    function handleRoleChange(e) {
        const role = e.target.value;
        switch (role) {
            case 'individualTrainee':
                setApi('http://localhost:8000/api/guest/signin');
                break;
            case 'corporateTrainee':
                setApi('http://localhost:8000/api/guest/signin');
                break;
            case 'instructor':
                setApi('http://localhost:8000/api/instructor/signin');
                break;
            case 'admin':
                setApi('http://localhost:8000/api/admin/signin');
                break;
            default:
        }
        setUserRole(role);
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
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Username" onChange={e => handleUsernameChange(e)} />
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
                    <input type="password" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Password" onChange={e => handlePasswordChange(e)} />
                </div>
            </div>
            {/* <div className="flex flex-col pt-4 mb-5">
                <div className="flex relative ">
                    <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                            </path>
                        </svg>
                    </span>
                    <select name="role" className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-800 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" onChange={e => handleRoleChange(e)} >
                        <option disabled selected>Select Role</option>
                        <option value="individualTrainee">Individual Trainee</option>
                        <option value="corporateTrainee">Corporate Trainee</option>
                        <option value="instructor">Instructor</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
            </div> */}
            <button type="button" className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-500 shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
                onClick={(e) => {
                    // handleSubmit(e)
                    handleSubmit1(e);
                    handleSubmit2(e);
                    handleSubmit3(e);
                }
                }
            >
                <span className="w-full">
                    Sign In
                </span>
            </button>
            <p className="mt-3 text-md text-center text-red-600">{errorMessage}</p>
        </form >
    )
}

export default LoginForm
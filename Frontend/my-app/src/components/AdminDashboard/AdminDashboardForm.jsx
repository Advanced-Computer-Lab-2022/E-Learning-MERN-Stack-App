import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const AdminDashboardForm = () => {

    const [accountInfo, setAccountInfo] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        country: "",
        gender: ""
    })
    const [confirmPasssword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [cookies] = useCookies(['token'])

    var api = 'http://localhost:8000/api/instructor/createCourse';


    async function handleSubmit(e) {
        await axios.post(api, accountInfo, {
            headers: {
                authorization: cookies['token']
            }
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
                switch (error.code) {
                    case 'ERR_BAD_REQUEST':
                        setMessage('Please submit a valid user');
                        break;
                    case 'ERR_NETWORK':
                        setMessage(`Please make sure you're connected to the internet`);
                        break;
                    default:
                }
            });

    }
    function handleRoleChange(e) {
        const role = e.target.value;
        switch (role) {
            case 'corporateTrainee':
                api = 'http://localhost:8000/api/admin/addCorporateTrainee';
                break;
            case 'instructor':
                api = 'http://localhost:8000/api/admin/addInstructor';
                break;
            case 'admin':
                api = 'http://localhost:8000/api/admin/addAdmin';
                break;
            default:
        }
    }
    function handleFirstnameChange(e) {
        setAccountInfo({
            ...accountInfo,
            firstName: e.target.value
        });
        console.log(accountInfo);
    }
    function handleLastnameChange(e) {
        setAccountInfo({
            ...accountInfo,
            lastName: e.target.value
        });
        console.log(accountInfo);
    }
    function handleUsernameChange(e) {
        setAccountInfo({
            ...accountInfo,
            userName: e.target.value
        });
        console.log(accountInfo);
    }
    function handleEmailChange(e) {
        setAccountInfo({
            ...accountInfo,
            email: e.target.value
        });
        console.log(accountInfo);
    }
    function handlePasswordChange(e) {
        setAccountInfo({
            ...accountInfo,
            password: e.target.value
        });
        console.log(accountInfo);
    }
    function handleCountryChange(e) {
        setAccountInfo({
            ...accountInfo,
            country: e.target.value
        });
        console.log(accountInfo);
    }
    function handleGenderChange(e) {
        setAccountInfo({
            ...accountInfo,
            gender: e.target.value
        });
        console.log(accountInfo);
    }
    function handleConfirmPasswordChange(e) {
        setConfirmPassword(document.getElementById('confirmPassword').value);
        console.log(confirmPasssword);
    }

    return (
        <form className="flex flex-col pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Username" onChange={e => handleUsernameChange(e)} required />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="email" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Email" onChange={e => handleEmailChange(e)} required />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="password" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Password" onChange={e => handlePasswordChange(e)} id='password' required />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="password" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Confirm Password" id='confirmPassword' onChange={e => handleConfirmPasswordChange(e)} required />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="First Name" onChange={e => handleFirstnameChange(e)} required />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Last Name" onChange={e => handleLastnameChange(e)} required />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative">
                    <select name="country" className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-800 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" onChange={e => handleCountryChange(e)} >
                        <option disabled selected>Select Country</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative">
                    <select name="gender" className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-800 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" onChange={e => handleGenderChange(e)} >
                        <option disabled selected>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col pt-4 mb-6">
                <div className="flex relative">
                    <select name="role" className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-800 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" onChange={e => handleRoleChange(e)} >
                        <option disabled selected>Select Role</option>
                        <option value="corporateTrainee">Corporate Trainee</option>
                        <option value="instructor">Instructor</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
            </div>


            <button type="button" className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-500 shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2" onClick={(e) => handleSubmit(e)}>
                <span className="w-full">
                    Add user
                </span>
            </button>
            {
                message === 'Registered Successfuly'
                    ? <p className="mt-3 text-md text-center text-green-600">{message}</p>
                    : <p className="mt-3 text-md text-center text-red-600">{message}</p>
            }

        </form >
    )
}
export default AdminDashboardForm
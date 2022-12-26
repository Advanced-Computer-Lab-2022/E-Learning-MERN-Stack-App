import React, { useContext } from 'react'
import UserInfoContext from '../../context/UserInfoContext'
const AccountInfo = ({ visible }) => {
    const { user } = useContext(UserInfoContext);
    if (visible)
        return (
            <div className="  my-5 mx-auto">
                <div className="container mx-auto">
                    <div className="inputs w-full max-w-2xl p-6 mx-auto">
                        <h2 className="text-2xl text-blue-500 font-bold">Account Setting</h2>
                        <div className="mt-6 border-t border-gray-400 pt-4">
                            <div className='flex flex-wrap -mx-3 mb-6'>
                                <div className='w-full md:w-full px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>email address</label>
                                    <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder={user.email} />
                                </div>
                                <div className='w-full md:w-full px-3 mb-6 '>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Password</label>
                                    <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder='Enter New Password' />
                                    <button className="mt-3 appearance-none bg-blue-500 text-white px-2 py-1 shadow-sm border border-gray-400 rounded-md hover:bg-white hover:text-blue-500">Change your password</button>
                                </div>
                                <div className='w-full md:w-full px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Pick your country</label>
                                    <div className="flex-shrink w-full inline-block relative">
                                        <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                            <option>{user.country}</option>
                                            <option>USA</option>
                                            <option>France</option>
                                            <option>Spain</option>
                                            <option>UK</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='w-full md:w-full px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>fav language</label>
                                    <div className="flex-shrink w-full inline-block relative">
                                        <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                            <option>{user.favoriteLanguage}</option>
                                            <option>Arabic</option>
                                            <option>France</option>
                                            <option>Spanish</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="personal w-full border-t border-gray-400 pt-4">
                                    <h2 className="text-2xl text-blue-500 font-bold">Personal info</h2>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className='w-full md:w-1/2 px-3 mb-6'>
                                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >first name</label>
                                            <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder={user.firstName} />
                                        </div>
                                        <div className='w-full md:w-1/2 px-3 mb-6'>
                                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >last name</label>
                                            <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder={user.lastName} />
                                        </div>
                                    </div>
                                    <div className='w-full md:w-full px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>user name</label>
                                        <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder={user.username} />
                                    </div>
                                    <div className='w-full md:w-full px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Bio</label>
                                        <textarea className='bg-gray-100 rounded-md  leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white' placeholder={user.bio}></textarea>
                                    </div>
                                    <div className="flex justify-end">
                                        <button className="mt-3 appearance-none bg-blue-500 text-white px-2 py-1 shadow-sm border border-gray-400 rounded-md hover:bg-white hover:text-blue-500">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
}

export default AccountInfo

/*
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useCookies } from 'react-cookie';
import UserInfoContext from '../../context/UserInfoContext'
const AccountInfo = ({ visible }) => {
    const { user } = useContext(UserInfoContext);

    const [confirmPasssword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [cookies] = useCookies(['token']);
    const [api, setApi] = useState('');
    const [accountInfo, setAccountInfo] = useState({

    });

    switch (user.role) {
        case 'normalTrainee':
            setApi('http://localhost:8000/guest/editInfo')
            break;
        case 'corporateTrainee':
            setApi('http://localhost:8000/guest/editInfo')
            break;
        case 'instructor':
            setApi('http://localhost:8000/instructor/editInfo')
            break;
        case 'admin':
            setApi('http://localhost:8000/admin/editInfo')
            break;
        default:
    }

    function handleSubmit(e) {
        axios.post(api, accountInfo, {
            headers: {
                authorization: cookies['token']
            }
        })
            .then((response) => {
                console.log(response);
                setMessage('User Added Successfully')
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

    if (visible)
        return (
            <div className="  my-5 mx-auto">
                <div className="container mx-auto">
                    <div className="inputs w-full max-w-2xl p-6 mx-auto">
                        <h2 className="text-2xl text-blue-500 font-bold">Account Setting</h2>
                        <div className="mt-6 border-t border-gray-400 pt-4">
                            <div className='flex flex-wrap -mx-3 mb-6'>
                                <div className='w-full md:w-full px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>email address</label>
                                    <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder={user.email} />
                                </div>
                                <div className='w-full md:w-full px-3 mb-6 '>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Password</label>
                                    <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder='Enter New Password' />
                                    <button className="mt-3 appearance-none bg-blue-500 text-white px-2 py-1 shadow-sm border border-gray-400 rounded-md hover:bg-white hover:text-blue-500">Change your password</button>
                                </div>
                                <div className='w-full md:w-full px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Pick your country</label>
                                    <div className="flex-shrink w-full inline-block relative">
                                        <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                            <option>{user.country}</option>
                                            <option>USA</option>
                                            <option>France</option>
                                            <option>Spain</option>
                                            <option>UK</option>
                                        </select>
                                    </div>
                                </div>
                                {/* <div className='w-full md:w-full px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>fav language</label>
                                    <div className="flex-shrink w-full inline-block relative">
                                        <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                            <option>{user.favoriteLanguage}</option>
                                            <option>Arabic</option>
                                            <option>France</option>
                                            <option>Spanish</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="personal w-full border-t border-gray-400 pt-4">
                                    <h2 className="text-2xl text-blue-500 font-bold">Personal info</h2>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className='w-full md:w-1/2 px-3 mb-6'>
                                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >first name</label>
                                            <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder={user.firstName} />
                                        </div>
                                        <div className='w-full md:w-1/2 px-3 mb-6'>
                                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >last name</label>
                                            <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder={user.lastName} />
                                        </div>
                                    </div>
                                    <div className='w-full md:w-full px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>user name</label>
                                        <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder={user.userName} />
                                    </div>
                                    {
                                        (user.role === 'instructor')
                                            ?
                                            <div className='w-full md:w-full px-3 mb-6'>
                                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Bio</label>
                                                <textarea className='bg-gray-100 rounded-md  leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white' placeholder={user.bio}></textarea>
                                            </div>
                                            : ''
                                    }
                                    <div className="flex justify-end">
                                        <button className="mt-3 appearance-none bg-blue-500 text-white px-2 py-1 shadow-sm border border-gray-400 rounded-md hover:bg-white hover:text-blue-500" type='button' onClick={e => handleSubmit(e)}>Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
}

export default AccountInfo
*/
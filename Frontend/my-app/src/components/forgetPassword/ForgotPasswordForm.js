import axios from 'axios'
import React, { useState } from 'react'



const ForgotPasswordForm = () => {
    const [user, setUser] = useState({
        userName: ''
    });
    const [message, setMessage] = useState('')

    function handleSubmit() {
        axios.post('http://localhost:8000/api/password-reset', user)
            .then(res => {
                console.log(res);
                setMessage("an email was sent to you successfully");
            })
            .catch(err => {
                console.log(err);
                setMessage("Something went wrong");
            });
    }
    function handleChange(e) {
        setUser({
            ...user,
            userName: e.target.value
        });
        console.log(user);
    }

    return (
        <>
            <form className="flex flex-col pt-3 md:pt-8">
                <div className="flex flex-col pt-4">
                    <div className="flex relative ">
                        <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                </path>
                            </svg>
                        </span>
                        <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Please enter your username" onChange={e => handleChange(e)} />
                    </div>
                </div>
                <button type="submit" className="mt-5 w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-500 shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2" onClick={() => handleSubmit()}>
                    <span className="w-full">
                        Send Code
                    </span>
                </button>
            </form>
            {
                (message === 'Course was Created Successfully')
                    ? <p className="mt-3 text-md text-center text-green-600">{message}</p>
                    : <p className="mt-3 text-md text-center text-red-600">{message}</p>
            }
        </>
    )

}

export default ForgotPasswordForm
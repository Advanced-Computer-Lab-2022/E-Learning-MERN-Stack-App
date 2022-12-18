import React from 'react'

const CheckoutProfile = ({ name, profileImgSrc }) => {
    return (
        <div className=" p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
                <div className="inline-flex items-center space-x-4">
                    <a href="#" className="block relative">
                        <img src={profileImgSrc} className="mx-auto object-cover rounded-full h-16 w-16 " />
                    </a>
                    <h1 className=" text-blue-500">
                        {name}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProfile
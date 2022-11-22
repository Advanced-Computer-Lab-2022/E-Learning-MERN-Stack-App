import React from 'react'

const SignupForm = () => {
    return (
        <form class="flex flex-col pt-3 md:pt-8">
            <div class="flex flex-col pt-4">
                <div class="flex relative ">
                    <input type="text" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Email" />
                </div>
            </div>
            <div class="flex flex-col pt-4">
                <div class="flex relative ">
                    <input type="password" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Password" />
                </div>
            </div>
            <div class="flex flex-col pt-4">
                <div class="flex relative ">
                    <input type="password" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Confirm Password" />
                </div>
            </div>
            <div class="flex flex-col pt-4">
                <div class="flex relative ">
                    <input type="text" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="First Name" />
                </div>
            </div>
            <div class="flex flex-col pt-4">
                <div class="flex relative ">
                    <input type="text" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Last Name" />
                </div>
            </div>
            <div class="flex flex-col pt-4 mb-12">
                <div class="flex relative">
                    <select name="country" class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-800 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option disabled selected>Select Country</option>
                        <option>
                            Egypt
                        </option>
                        <option>
                            USA
                        </option>
                        <option>
                            Ghana
                        </option>
                    </select>
                </div>
            </div>

            <button type="submit" class="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-500 shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2">
                <span class="w-full">
                    Submit
                </span>
            </button>
        </form>
    )
}

export default SignupForm
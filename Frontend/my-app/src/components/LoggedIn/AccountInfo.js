import React from 'react'
const user = {
    email: "minahannalla@domain.com",
    country: "Egypt",
    favoriteLanguage: "English",
    firstName: "Mina",
    lastName: "Hannalla",
    username: "mina.hannalla123",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate felis eget risus tempus, a faucibus ex posuere. Ut aliquam consequat metus at maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae semper dui. Curabitur hendrerit sed enim sit amet pulvinar."
}
const AccountInfo = ({ visible }) => {
    if (visible)
        return (
            <div class="  my-5 mx-auto">
                <div class="container mx-auto">
                    <div class="inputs w-full max-w-2xl p-6 mx-auto">
                        <h2 class="text-2xl text-blue-500 font-bold">Account Setting</h2>
                        <div class="mt-6 border-t border-gray-400 pt-4">
                            <div class='flex flex-wrap -mx-3 mb-6'>
                                <div class='w-full md:w-full px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>email address</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder={user.email} />
                                </div>
                                <div class='w-full md:w-full px-3 mb-6 '>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Password</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder='Enter New Password' />
                                    <button class="mt-3 appearance-none bg-blue-500 text-white px-2 py-1 shadow-sm border border-gray-400 rounded-md hover:bg-white hover:text-blue-500">Change your password</button>
                                </div>
                                <div class='w-full md:w-full px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Pick your country</label>
                                    <div class="flex-shrink w-full inline-block relative">
                                        <select class="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                            <option>{user.country}</option>
                                            <option>USA</option>
                                            <option>France</option>
                                            <option>Spain</option>
                                            <option>UK</option>
                                        </select>
                                    </div>
                                </div>
                                <div class='w-full md:w-full px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>fav language</label>
                                    <div class="flex-shrink w-full inline-block relative">
                                        <select class="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                            <option>{user.favoriteLanguage}</option>
                                            <option>Arabic</option>
                                            <option>France</option>
                                            <option>Spanish</option>
                                        </select>

                                    </div>
                                </div>
                                <div class="personal w-full border-t border-gray-400 pt-4">
                                    <h2 class="text-2xl text-blue-500 font-bold">Personal info</h2>
                                    <div class="flex items-center justify-between mt-4">
                                        <div class='w-full md:w-1/2 px-3 mb-6'>
                                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >first name</label>
                                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder={user.firstName} />
                                        </div>
                                        <div class='w-full md:w-1/2 px-3 mb-6'>
                                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >last name</label>
                                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder={user.lastName} />
                                        </div>
                                    </div>
                                    <div class='w-full md:w-full px-3 mb-6'>
                                        <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>user name</label>
                                        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder={user.username} />
                                    </div>
                                    <div class='w-full md:w-full px-3 mb-6'>
                                        <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Bio</label>
                                        <textarea class='bg-gray-100 rounded-md  leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white' placeholder={user.bio}></textarea>
                                    </div>
                                    <div class="flex justify-end">
                                        <button class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit">save changes</button>
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
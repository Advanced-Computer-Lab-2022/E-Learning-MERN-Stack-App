import React from 'react'

const ContactUs = ({ visible }) => {
    if (visible)
        return (

            <div className=" h-96 w-full mb-96 mt-52">
                <div className="w-full flex items-center justify-center my-12 ">
                    <div className="absolute top-40 bg-white dark:bg-gray-800 shadow rounded-3xl py-16 lg:px-28 px-8">
                        <p className="md:text-3xl text-xl font-bold leading-7 text-center text-blue-500 dark:text-white">Let’s chat and get a quote!</p>
                        <div className="md:flex items-center mt-12">
                            <div className="md:w-72 flex flex-col">
                                <label className="text-base font-semibold leading-none text-blue-500 dark:text-white">Name</label>
                                <input tabindex="0" arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-500 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" />
                            </div>
                            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="text-base font-semibold leading-none text-blue-500 dark:text-white">Email Address</label>
                                <input tabindex="0" arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-500 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" />
                            </div>
                        </div>
                        <div className="md:flex items-center mt-8">
                            <div className="md:w-72 flex flex-col">
                                <label className="text-base font-semibold leading-none text-blue-500 dark:text-white">Company name</label>
                                <input tabindex="0" role="input" arial-label="Please input company name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input company name" />
                            </div>
                            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="text-base font-semibold leading-none text-blue-500 dark:text-white">Country</label>
                                <input tabindex="0" arial-label="Please input country name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" />
                            </div>
                        </div>
                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <label className="text-base font-semibold leading-none text-blue-500 dark:text-white">Message</label>
                                <textarea tabindex="0" aria-label="leave a message" role="textbox" type="name" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-500 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-blue-500 rounded hover:bg-blue-800 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>



        )
}

export default ContactUs
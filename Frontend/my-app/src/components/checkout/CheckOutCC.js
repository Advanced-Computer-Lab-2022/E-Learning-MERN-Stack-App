import React from 'react'

const CheckOutCC = () => {
    return (
        <>
            <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 class="max-w-sm mx-auto md:w-1/3 text-blue-500">
                    Credit Card Number
                </h2>
                <div class="max-w-sm mx-auto md:w-2/3">
                    <div class=" relative ">
                        <input type="text" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="XXXX XXXX XXXX XXXX" />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default CheckOutCC
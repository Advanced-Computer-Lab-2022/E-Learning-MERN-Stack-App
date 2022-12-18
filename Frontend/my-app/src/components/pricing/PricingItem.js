import React from 'react'

const PricingItem = ({ selected, text, price, description, setSelectedPricing, myIdx }) => {
    if (!selected)
        return (
            <div role="listitem" className="bg-white dark:bg-gray-800 cursor-pointer shadow rounded-lg p-8 relative z-30 mt-5" onClick={() => setSelectedPricing(myIdx)}>
                <div className="md:flex items-center justify-between">
                    <h2 className="text-2xl font-semibold leading-6 text-blue-900 dark:text-white">{text}</h2>
                    <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800 dark:text-white">{price}<span className="font-normal text-base">/mo</span></p>
                </div>
                <p className="md:w-80 text-base leading-6 mt-4 text-gray-600 dark:text-gray-200">{description}</p>
            </div>
        )
    else
        return (
            <div role="listitem" className="bg-white dark:bg-gray-800 cursor-pointer shadow rounded-lg mt-5 flex relative z-30" onClick={() => setSelectedPricing(myIdx)}>
                <div className="w-2.5 h-auto bg-blue-500 rounded-tl-md rounded-bl-md"></div>
                <div className="w-full p-8">
                    <div className="md:flex items-center justify-between">
                        <h2 className="text-2xl font-semibold leading-6 text-blue-500 dark:text-white">{text}</h2>
                        <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800 dark:text-white">{price}<span className="font-normal text-base">/mo</span></p>
                    </div>
                    <p className="md:w-80 text-base leading-6 mt-4 text-gray-600 dark:text-gray-200">{description}</p>
                </div>
            </div>
        )
}

export default PricingItem
import React from 'react'

const WhatYouWillLearnListWrapper = ({ children }) => {
    return (
        <>
            <div class="flex items-center">
                <h4 class="flex-shrink-0 pr-4 bg-whitetext-sm leading-5 tracking-wider font-semibold uppercase text-blue-500">
                    What you'll learn
                </h4>
                <div class="flex-1 border-t-2 border-gray-200">
                </div>
            </div>
            <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                {children}
            </ul>
        </>
    )
}

export default WhatYouWillLearnListWrapper
import React from 'react'

const TakingTestButton = () => {
    return (
        <a href="./test" target="_blank">
            <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <circle cx="12" cy="5" r="3"></circle>
                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                </div>
                <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-blue-500 mb-1 tracking-wider">Test your understanding</h2>
                    <p class="leading-relaxed">Small test to make sure you've grasped all the important ideas. Required grade: 70% to pass this test.</p>
                </div>
            </div>
        </a >
    )
}

export default TakingTestButton
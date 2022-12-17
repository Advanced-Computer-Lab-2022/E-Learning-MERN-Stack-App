import React from 'react'

const WatchVideoButton = () => {
    return (
        <div class="flex relative pb-12">
            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            </div>
            <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-sm text-blue-500 mb-1 tracking-wider">Watch Video</h2>
                <p class="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.</p>
            </div>
        </div>
    )
}

export default WatchVideoButton
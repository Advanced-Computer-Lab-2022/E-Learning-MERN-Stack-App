import React from 'react'

const ReviewSectionButton = () => {
    return (
        <div class="flex relative">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
            </div>
            <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-sm text-blue-500 mb-1 tracking-wider">Review section</h2>
                <p class="leading-relaxed">Have any suggestions for our platform to be better? Gladly write them here.</p>
            </div>
        </div>
    )
}

export default ReviewSectionButton
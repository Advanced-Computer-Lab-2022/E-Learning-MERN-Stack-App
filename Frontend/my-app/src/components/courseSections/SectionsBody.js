import React from 'react'
import ReviewSectionButton from './ReviewSectionButton'
import TakingTestButton from './TakingTestButton'
import WatchVideoButton from './WatchVideoButton'

const SectionsBody = () => {
    return (
        <div class="container px-5 py-3 mx-auto flex flex-wrap">
            <div class="flex flex-wrap w-full">
                <WatchVideoButton />
                <TakingTestButton />
                <ReviewSectionButton />
            </div>
        </div>
    )
}

export default SectionsBody
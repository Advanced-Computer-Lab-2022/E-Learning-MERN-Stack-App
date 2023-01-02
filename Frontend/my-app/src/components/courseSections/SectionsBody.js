import React from 'react'
import ReviewSectionButton from './ReviewSectionButton'
import TakingTestButton from './TakingTestButton'
import WatchVideoButton from './WatchVideoButton'

const SectionsBody = ({ lessonEmbed, lessonDescription, hours, testId }) => {
    return (
        <>
            <p className='text-center text-blue-600 text-2xl font-serif'>Section Hours: {hours}</p>
            <div className="container px-5 py-3 mx-auto flex flex-wrap">
                <div className="flex flex-wrap w-full">
                    <WatchVideoButton lessonEmbed={lessonEmbed} lessonDescription={lessonDescription} />
                    {/* <TakingTestButton testId={testId} /> */}
                    <ReviewSectionButton />
                </div>
            </div>
        </>
    )
}

export default SectionsBody
import React from 'react'
import ReviewCardImage from './ReviewCardImage'

const ReviewCard = ({ description, reviewerName, imgsrc }) => {
    return (
        <div class="mb-6 md:mb-0">
            <ReviewCardImage imgsrc={imgsrc} />
            <p class="text-xl my-4 text-gray-500">
                {description}
            </p>
            <p class="italic text-blue-500">~ {reviewerName}</p>
        </div>

    )
}

export default ReviewCard
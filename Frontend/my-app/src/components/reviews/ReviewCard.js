import React from 'react'
import ReviewCardImage from './ReviewCardImage'
import Rating from './../rating/Rating'
const ReviewCard = ({ description, reviewerName, imgsrc, rating }) => {
    return (
        <div className="mb-6 md:mb-0">
            <ReviewCardImage imgsrc={imgsrc} />
            <p className="text-xl my-4 text-gray-500">
                {description}
            </p>
            <Rating rating={rating} />
            <p className="italic text-blue-500 mt-2">~ {reviewerName}</p>
        </div>

    )
}

export default ReviewCard
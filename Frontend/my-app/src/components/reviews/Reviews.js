import React from 'react'
import ReviewCard from './ReviewCard'
import ReviewsWrapper from './ReviewsWrapper'

const Reviews = ({ visible, reviews }) => {

    const revs = reviews.map((review) => [
        <ReviewCard
            description={review.reviewerReview}
            reviewerName={review.reviewerName}
            imgsrc={review.reviewerImgURL}
            rating={review.reviewerRating}
        />
    ])

    if (visible)
        return (
            <section className="mb-10 text-gray-700 px-4">
                <h2 className=" mx-32 mb-8 text-4xl tracking-tight font-extrabold text-blue-500">Reviews</h2>
                <div className='mx-32 border-b-gray-200 border-b mb-10' />
                <ReviewsWrapper>
                    {revs}
                </ReviewsWrapper>
            </section>
        )
}

export default Reviews
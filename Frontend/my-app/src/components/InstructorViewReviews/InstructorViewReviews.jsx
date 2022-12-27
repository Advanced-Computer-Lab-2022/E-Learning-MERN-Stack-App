import React from 'react'
import ReviewCard from '../reviews/ReviewCard'
import ReviewsWrapper from '../reviews/ReviewsWrapper'

const InstructorViewReviews = ({ visible, reviews }) => {

    const reviews2 = [
        {
            reviewerReview: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, voluptatem nihil quaerat debitis dolorum, repudiandae id assumenda fugiat saepe aliquam quasi nisi reiciendis officia rerum iste. Neque rem quasi velit.',
            reviewerName: "Ahmad",
            reviewerImgURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(21).jpg",
            reviewerRating: 4
        },
    ]

    const revs = reviews2.map((review) => [
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

export default InstructorViewReviews
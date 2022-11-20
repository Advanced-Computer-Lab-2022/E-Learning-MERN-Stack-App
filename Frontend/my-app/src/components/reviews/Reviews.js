import React from 'react'
import ReviewCard from './ReviewCard'
import ReviewsWrapper from './ReviewsWrapper'

const Reviews = ({ visible }) => {
    if (visible)
        return (
            <section class="mb-20 text-gray-700 px-4">
                <div class="text-center max-w-3xl mx-auto">
                    <h3 class="text-3xl font-bold mb-6 text-blue-500">Reviews</h3>
                </div>

                <ReviewsWrapper>
                    <ReviewCard
                        description={"Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut perspiciatis unde omnis."}
                        reviewerName={"Cat"}
                        imgsrc="https://mdbootstrap.com/img/Photos/Avatars/img%20(21).jpg"
                        rating={1}
                    />
                    <ReviewCard
                        description={"Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut perspiciatis unde omnis."}
                        reviewerName={"Anna Morian"}
                        imgsrc="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg"
                        rating={4}
                    />
                </ReviewsWrapper>
            </section>
        )
}

export default Reviews
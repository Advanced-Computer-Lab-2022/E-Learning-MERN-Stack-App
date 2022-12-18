import React from 'react'
import ReviewCard from './ReviewCard'
import ReviewsWrapper from './ReviewsWrapper'

const Reviews = ({ visible }) => {
    if (visible)
        return (
            <section className="mb-10 text-gray-700 px-4">
                <h2 className=" mx-32 mb-8 text-4xl tracking-tight font-extrabold text-blue-500">Reviews</h2>
                <div className='mx-32 border-b-gray-200 border-b mb-10' />
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
import React from 'react'

const ReviewsWrapper = ({ children }) => {
    return (
        <div className="grid md:grid-cols-2 gap-12 text-center mx-32">
            {children}
        </div>
    )
}

export default ReviewsWrapper
import React from 'react'

const ReviewsWrapper = ({ children }) => {
    return (
        <div class="grid md:grid-cols-2 gap-12 text-center">
            {children}
        </div>
    )
}

export default ReviewsWrapper
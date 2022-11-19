import React from 'react'

const ReviewCardImage = ({ imgsrc }) => {
    return (
        <div class="flex justify-center mb-6">
            <img
                src={imgsrc}
                class="rounded-full shadow-lg w-24"
            />
        </div>
    )
}

export default ReviewCardImage
import React from 'react'

const ReviewCardImage = ({ imgsrc }) => {
    return (
        <div className="flex justify-center mb-6">
            <img
                src={imgsrc}
                className="rounded-full shadow-lg w-24"
            />
        </div>
    )
}

export default ReviewCardImage
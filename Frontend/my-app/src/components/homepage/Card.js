import React from 'react'

const Card = ({ text, description, children, imgsrc }) => {
    return (
        <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full" src={imgsrc} alt={text} />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{text}</div>
                <p class="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                {children}
            </div>
        </div>
    )
}

export default Card
import React from 'react'

const Card = ({ text, description, children, imgsrc }) => {
    return (
        <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={imgsrc} alt={text} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{text}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {children}
            </div>
        </div>
    )
}

export default Card
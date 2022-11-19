import React from 'react'

const CardTag = ({ text }) => {
    return (
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-500 mr-2 mb-2"># {text}</span>
    )
}

export default CardTag
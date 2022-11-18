import React from 'react'

const SmallScreenListItem = ({ text, href }) => {
    return (
        <li class="mb-1">
            <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href={href}>{text}</a>
        </li>
    )
}

export default SmallScreenListItem
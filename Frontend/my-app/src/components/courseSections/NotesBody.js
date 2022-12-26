import React from 'react'

const NotesBody = ({ pdfLink, text }) => {
    return (
        <div className="flex relative px-5">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
            </div>
            <div className="flex-grow pl-4 py-2">
                <a href={pdfLink} target={'blank'} className="font-medium title-font text-sm text-blue-500 tracking-wider">{text}</a>
            </div>
        </div>
    )
}

export default NotesBody
import React from 'react'

const Choice = ({ text, selected, isCorrect, isWrong }) => {
    return (
        <div>
            <div   >
                <input checked={selected}
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"
                />
                <label
                    className={isCorrect ? "inline-block text-green-500 cursor-pointer" : isWrong && selected ? "inline-block text-red-500 cursor-pointer" : "inline-block text-gray-800 cursor-pointer"}>
                    {text}
                </label>
            </div>
        </div>
    )
}

export default Choice
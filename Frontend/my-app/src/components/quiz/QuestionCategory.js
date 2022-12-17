import React from 'react'

const QuestionCategory = ({ topicName }) => {
    return (
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span class="font-semibold title-font text-blue-500">{topicName}</span>
        </div>
    )
}

export default QuestionCategory
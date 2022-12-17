import React from 'react'
import QuestionCategory from './QuestionCategory'

const Question = ({ topicName, questionDesc, topicNumber, children }) => {
    return (
        <div class="py-8 flex flex-wrap md:flex-nowrap">
            <QuestionCategory topicName={topicNumber} />
            <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{topicName}</h2>
                <p class="leading-relaxed">{questionDesc}</p>
                {children}
            </div>

        </div>
    )
}

export default Question
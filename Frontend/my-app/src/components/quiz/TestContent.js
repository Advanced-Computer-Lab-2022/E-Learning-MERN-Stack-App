import React from 'react'
import Question from './Question'
import { useState } from 'react'
import ChoicesSet from './ChoicesSet';




const TestContent = ({ visible, questions }) => {
    const [showResults, setShowResults] = useState(false);
    const [canEdit, setCanEdit] = useState(true);
    function submitClbk() {
        setShowResults(true);
        setCanEdit(false);
        // @TODO :: Make the backend integration
        // consts q1Info,q2Info,... must be fetched from the db according to the course's section test
        // just fetch them and everything else is handled
        // keep them with the same naming, so it doesnot require any further edits
    }
    const questionsSet = questions.map((question) =>
        [
            <Question
                topicName={question.topicName}
                questionDesc={question.quesDesc}
                topicNumber={question.topicNumber}
            >
                <div className="flex justify-left py-1 flex-col px-8 pt-5">
                    <ChoicesSet qInfo={question} showResults={showResults} canEdit={canEdit} />
                </div>
            </Question>
        ]
    )
    if (visible === 1)
        return (
            <>
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-20 py-24 mx-auto">
                        <div className="-my-8 divide-y-2 divide-gray-100">
                            {/* @TODO :: Use array.map to iterate over the fetched questions */}
                            {questionsSet}
                        </div>
                    </div>
                    <div className='m-auto w-1/2'>
                        <button
                            className='-mx-4 -my-4 mb-20 bg-blue-500 px-16 py-5 text-white font-bold text-lg hover:bg-blue-700 rounded-lg disabled:bg-blue-300'
                            disabled={!canEdit}
                            onClick={() => {
                                submitClbk();
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </section>
            </>
        )
}

export default TestContent
import React from 'react'
import Question from './Question'
import { useState } from 'react'
import ChoicesSet from './ChoicesSet';

var submittedList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function setSubmitted(idx, val) {
    submittedList[idx] = val;
}
function calculateCorrectAnswers() {
    var res = 0;
    submittedList.forEach(
        (x, i) => {
            if (x === 1)
                res += 1;
        });
    return res
}

const TestContent = ({ visible, questions }) => {
    const [showResults, setShowResults] = useState(false);
    const [canEdit, setCanEdit] = useState(true);
    const [grade, setGrade] = useState(0);

    function calculateGrade() {
        setGrade(calculateCorrectAnswers() / questions.length * 100)
    }
    function submitClbk() {
        setShowResults(true);
        setCanEdit(false);
        calculateGrade()
        // @TODO :: Make the backend integration
        // upload the test grade to the db to be saved
    }
    const questionsSet = questions.map((question) =>
        [
            <Question
                topicName={question.topicName}
                questionDesc={question.quesDesc}
                topicNumber={question.topicNumber}
            >
                <div className="flex justify-left py-1 flex-col px-8 pt-5">
                    <ChoicesSet
                        qInfo={question}
                        showResults={showResults}
                        canEdit={canEdit}
                        setSubmitted={setSubmitted}
                    />
                </div>
            </Question>
        ]
    )
    if (visible === 1)
        return (
            <>
                <section className="text-gray-600 body-font overflow-hidden">

                    <div class={grade >= 70 && showResults ? "bg-green-200 border-green-600 text-green-600 border-l-4 p-4 mt-10 mx-5" : "hidden"} role="alert">
                        <p class="font-bold">
                            Congratulations
                        </p>
                        <p>
                            Your current grade is <span className='font-bold underline'>{grade.toFixed(2)}%</span>.
                        </p>
                    </div>
                    <div class={grade < 70 && showResults ? "bg-red-200 border-red-600 text-red-600 border-l-4 p-4 mt-10 mx-5" : "hidden"} role="alert">
                        <p class="font-bold">
                            Looks like you need to revise these topics
                        </p>
                        <p>
                            Your current grade is <span className='font-bold underline'>{grade.toFixed(2)}%</span>. You surely can do better.
                            <br></br>
                            Passing grade is <span className='font-bold'>70% or above.</span> <span className='font-bold'> Good Luck</span>
                        </p>
                    </div>
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
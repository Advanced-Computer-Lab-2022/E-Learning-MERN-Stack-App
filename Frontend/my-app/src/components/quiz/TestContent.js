import React from 'react'
import Question from './Question'
import { useState } from 'react'
import ChoicesSet from './ChoicesSet';

const q1Info = {
    answer1: "Answer 1 Q1: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    answer2: "Answer 2 Q1: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    answer3: "Answer 3 Q1: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    answer4: "Answer 4 Q1: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    quesDesc: "Q1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus lectus, sagittis eget sem sit amet, dictum ullamcorper mi. Proin nisl tellus, auctor at sem in, ultricies vehicula felis. Aliquam erat volutpat?",
    topicNumber: "Topic 1",
    topicName: "Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    correctAnswer: 2,
}
const q2Info = {
    answer1: "Answer 1 Q2: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    answer2: "Answer 2 Q2: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    answer3: "Answer 3 Q2: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    answer4: "Answer 4 Q2: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    quesDesc: "Q2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus lectus, sagittis eget sem sit amet, dictum ullamcorper mi. Proin nisl tellus, auctor at sem in, ultricies vehicula felis. Aliquam erat volutpat?",
    topicNumber: "Topic 2",
    topicName: "Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    correctAnswer: 1,
}
const q3Info = {
    answer1: "Answer 1 Q3: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    answer2: "Answer 2 Q3: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    answer3: "Answer 3 Q3: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    answer4: "Answer 4 Q3: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    quesDesc: "Q3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus lectus, sagittis eget sem sit amet, dictum ullamcorper mi. Proin nisl tellus, auctor at sem in, ultricies vehicula felis. Aliquam erat volutpat?",
    topicNumber: "Topic 3",
    topicName: "Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    correctAnswer: 3,
}
const q4Info = {
    answer1: "Answer 1 Q4: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    answer2: "Answer 2 Q4: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    answer3: "Answer 3 Q4: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    answer4: "Answer 4 Q4: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    quesDesc: "Q4: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus lectus, sagittis eget sem sit amet, dictum ullamcorper mi. Proin nisl tellus, auctor at sem in, ultricies vehicula felis. Aliquam erat volutpat?",
    topicNumber: "Topic 4",
    topicName: "Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    correctAnswer: 0,
}
const q5Info = {
    answer1: "Answer 1 Q5: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    answer2: "Answer 2 Q5: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    answer3: "Answer 3 Q5: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    answer4: "Answer 4 Q5: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    quesDesc: "Q5: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus lectus, sagittis eget sem sit amet, dictum ullamcorper mi. Proin nisl tellus, auctor at sem in, ultricies vehicula felis. Aliquam erat volutpat?",
    topicNumber: "Topic 5",
    topicName: "Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
    correctAnswer: 3,
}




const TestContent = ({ visible }) => {
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

    if (visible === 1)
        return (
            <>
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-20 py-24 mx-auto">
                        <div className="-my-8 divide-y-2 divide-gray-100">
                            {/* @TODO :: Use array.map to iterate over the fetched questions */}
                            <Question
                                topicName={q1Info.topicName}
                                questionDesc={q1Info.quesDesc}
                                topicNumber={q1Info.topicNumber}
                            >
                                <div className="flex justify-left py-1 flex-col px-8 pt-5">
                                    <ChoicesSet qInfo={q1Info} showResults={showResults} canEdit={canEdit} />
                                </div>
                            </Question>

                            <Question
                                topicName={q2Info.topicName}
                                questionDesc={q2Info.quesDesc}
                                topicNumber={q2Info.topicNumber}
                            >
                                <div className="flex justify-left py-1 flex-col px-8 pt-5">
                                    <ChoicesSet qInfo={q2Info} showResults={showResults} canEdit={canEdit} />
                                </div>
                            </Question>

                            <Question
                                topicName={q3Info.topicName}
                                questionDesc={q3Info.quesDesc}
                                topicNumber={q3Info.topicNumber}
                            >
                                <div className="flex justify-left py-1 flex-col px-8 pt-5">
                                    <ChoicesSet qInfo={q3Info} showResults={showResults} canEdit={canEdit} />
                                </div>
                            </Question>

                            <Question
                                topicName={q4Info.topicName}
                                questionDesc={q4Info.quesDesc}
                                topicNumber={q4Info.topicNumber}
                            >
                                <div className="flex justify-left py-1 flex-col px-8 pt-5">
                                    <ChoicesSet qInfo={q4Info} showResults={showResults} canEdit={canEdit} />
                                </div>
                            </Question>

                            <Question
                                topicName={q5Info.topicName}
                                questionDesc={q5Info.quesDesc}
                                topicNumber={q5Info.topicNumber}
                            >
                                <div className="flex justify-left py-1 flex-col px-8 pt-5">
                                    <ChoicesSet qInfo={q5Info} showResults={showResults} canEdit={canEdit} />
                                </div>
                            </Question>
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
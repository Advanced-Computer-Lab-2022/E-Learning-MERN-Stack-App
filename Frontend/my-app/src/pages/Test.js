import React from 'react'
import TestContent from '../components/quiz/TestContent'
import TestLanding from '../components/quiz/TestLanding'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const allTestsDB =
    [{
        id: 'tst-01-crs-9789',
        questions: [
            {
                idx: 0,
                answer1: "Answer 1 Q1 01: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer2: "Answer 2 Q1 01: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer3: "Answer 3 Q1 01: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer4: "Answer 4 Q1 01: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                quesDesc: "Q1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus lectus, sagittis eget sem sit amet, dictum ullamcorper mi. Proin nisl tellus, auctor at sem in, ultricies vehicula felis. Aliquam erat volutpat?",
                topicNumber: "Topic 1",
                topicName: "Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                correctAnswer: 2
            },
            {
                idx: 1,
                answer1: "Answer 1 Q2 01: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer2: "Answer 2 Q2 01: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer3: "Answer 3 Q2 01: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer4: "Answer 4 Q2 01: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                quesDesc: "Q2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus lectus, sagittis eget sem sit amet, dictum ullamcorper mi. Proin nisl tellus, auctor at sem in, ultricies vehicula felis. Aliquam erat volutpat?",
                topicNumber: "Topic 2",
                topicName: "Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                correctAnswer: 1
            },
            {
                idx: 2,
                answer1: "Answer 1 Q3 01: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer2: "Answer 2 Q3 01: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer3: "Answer 3 Q3 01: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer4: "Answer 4 Q3 01: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                quesDesc: "Q2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus lectus, sagittis eget sem sit amet, dictum ullamcorper mi. Proin nisl tellus, auctor at sem in, ultricies vehicula felis. Aliquam erat volutpat?",
                topicNumber: "Topic 3",
                topicName: "Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                correctAnswer: 3
            }
        ]
    },
    {
        id: 'tst-02-crs-9789',
        questions: [
            {
                idx: 0,
                answer1: "Answer 1 Q1 02: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer2: "Answer 2 Q1 02: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer3: "Answer 3 Q1 02: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer4: "Answer 4 Q1 02: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                quesDesc: "Q1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus lectus, sagittis eget sem sit amet, dictum ullamcorper mi. Proin nisl tellus, auctor at sem in, ultricies vehicula felis. Aliquam erat volutpat?",
                topicNumber: "Topic 1",
                topicName: "Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                correctAnswer: 2
            },
            {
                idx: 1,
                answer1: "Answer 1 Q2 02: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer2: "Answer 2 Q2 02: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer3: "Answer 3 Q2 02: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer4: "Answer 4 Q2 02: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                quesDesc: "Q2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus lectus, sagittis eget sem sit amet, dictum ullamcorper mi. Proin nisl tellus, auctor at sem in, ultricies vehicula felis. Aliquam erat volutpat?",
                topicNumber: "Topic 2",
                topicName: "Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'tst-03-crs-9789',
        questions: [
            {
                idx: 0,
                answer1: "Answer 1 Q1 03: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer2: "Answer 2 Q1 03: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer3: "Answer 3 Q1 03: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer4: "Answer 4 Q1 03: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                quesDesc: "Q1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus lectus, sagittis eget sem sit amet, dictum ullamcorper mi. Proin nisl tellus, auctor at sem in, ultricies vehicula felis. Aliquam erat volutpat?",
                topicNumber: "Topic 1",
                topicName: "Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                correctAnswer: 2
            },
            {
                idx: 1,
                answer1: "Answer 1 Q2 03: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer2: "Answer 2 Q2 03: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer3: "Answer 3 Q2 03: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                answer4: "Answer 4 Q2 03: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                quesDesc: "Q2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus lectus, sagittis eget sem sit amet, dictum ullamcorper mi. Proin nisl tellus, auctor at sem in, ultricies vehicula felis. Aliquam erat volutpat?",
                topicNumber: "Topic 2",
                topicName: "Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.",
                correctAnswer: 1
            }
        ]
    }
    ]

const Test = () => {
    const params = useParams();
    const test = allTestsDB.find(({ id }) => id === params.id);
    const [visible, setVisibility] = useState(0);
    return (
        <>
            <TestLanding
                visible={visible}
                setVisibility={setVisibility}
            />
            <TestContent visible={visible} questions={test.questions} />
        </>
    )
}

export default Test
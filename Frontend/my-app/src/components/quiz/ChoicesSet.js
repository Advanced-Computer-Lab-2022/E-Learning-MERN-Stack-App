import React from 'react'
import Choice from './Choice'
import { useState } from 'react'
const ChoicesSet = ({ qInfo, showResults, canEdit }) => {
    const [selected, setSelected] = useState(-1)
    return (
        <>
            <div onClick={() => { canEdit && setSelected(0) }}>
                <Choice
                    text={qInfo.answer1}
                    selected={selected === 0}
                    isCorrect={qInfo.correctAnswer === 0 && showResults}
                    isWrong={selected !== qInfo.correctAnswer && showResults}
                />
            </div>
            <div onClick={() => { canEdit && setSelected(1) }}>
                <Choice
                    text={qInfo.answer2}
                    selected={selected === 1}
                    isCorrect={qInfo.correctAnswer === 1 && showResults}
                    isWrong={selected !== qInfo.correctAnswer && showResults}
                />
            </div>
            <div onClick={() => { canEdit && setSelected(2) }}>
                <Choice
                    text={qInfo.answer3}
                    selected={selected === 2}
                    isCorrect={qInfo.correctAnswer === 2 && showResults}
                    isWrong={selected !== qInfo.correctAnswer && showResults}
                />
            </div>
            <div onClick={() => { canEdit && setSelected(3) }}>
                <Choice
                    text={qInfo.answer4}
                    selected={selected === 3}
                    isCorrect={qInfo.correctAnswer === 3 && showResults}
                    isWrong={selected !== qInfo.correctAnswer && showResults}
                />
            </div>
        </>
    )
}

export default ChoicesSet
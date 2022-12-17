import React from 'react'
import TestContent from '../components/quiz/TestContent'
import TestLanding from '../components/quiz/TestLanding'
import { useState } from 'react'
const Test = () => {
    const [visible, setVisibility] = useState(0);
    return (
        <>
            <TestLanding
                visible={visible}
                setVisibility={setVisibility}
            />
            <TestContent visible={visible} />
        </>
    )
}

export default Test
import React from 'react'
import TestLandingHeader from './TestLandingHeader'
import TestLandingRules from './TestLandingRules'

const TestLanding = ({ visible, setVisibility }) => {
    if (visible === 0)
        return (
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <TestLandingHeader />
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <TestLandingRules />
                    </div>
                    <button onClick={() => setVisibility(1)} className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Take Test</button>
                </div>
            </section>
        )
}

export default TestLanding
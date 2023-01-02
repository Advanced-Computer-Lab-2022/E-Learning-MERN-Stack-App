import React from 'react'
import FeatureItem from './FeatureItem'

const Features = ({ visible }) => {
    if (visible)
        return (
            <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 mb-20 -mt-52">
                <FeatureItem up={true} text={"Personalized learning"} description={"Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning."} />
                <FeatureItem up={false} text={"Trusted content"} description={"Created by experts, library of trusted practice and lessons covers programming, data science, and more. Always available for learners and teachers."} />
                <FeatureItem up={true} text={"Tools to empower teachers"} description={"Teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student."} />
            </div>
        )
}

export default Features
import React from 'react'
import FeatureItem from './FeatureItem'

const Features = ({ visible }) => {
    if (visible)
        return (
            <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 mb-20 -mt-52">
                <FeatureItem up={true} text={"Lorem ipsum"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat enim a orci mattis, at pellentesque velit feugiat. Fusce porttitor bibendum dapibus."} />
                <FeatureItem up={false} text={"Lorem ipsum"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat enim a orci mattis, at pellentesque velit feugiat. Fusce porttitor bibendum dapibus."} />
                <FeatureItem up={true} text={"Lorem ipsum"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat enim a orci mattis, at pellentesque velit feugiat. Fusce porttitor bibendum dapibus."} />
            </div>
        )
}

export default Features
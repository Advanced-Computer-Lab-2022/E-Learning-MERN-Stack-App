import React from 'react'
import CourseFirstDivTitleAndDescription from './CourseFirstDivTitleAndDescription'
import WhatYouWillLearnBulletPoint from './WhatYouWillLearnBulletPoint'
import WhatYouWillLearnListWrapper from './WhatYouWillLearnListWrapper'
import CourseIncludesWrapper from './CourseIncludesWrapper'
import CourseIncludesBulletPoint from './CourseIncludesBulletPoint'
import CourseFirstDivPricing from './CourseFirstDivPricing'
import ProgressBar from './ProgressBar'


const CourseFirstDiv = ({ owned, courseObj, progress}) => {
    const learnBullets = courseObj.whatYouWillLearnBullets.map((bullet) => <WhatYouWillLearnBulletPoint text={bullet} />)
    const includesBulles = courseObj.courseIncludes.map((bullet) => <CourseIncludesBulletPoint text={bullet} />)
    return (
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
            <div className="pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                <div className="bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12">
                    <CourseFirstDivTitleAndDescription
                        title={courseObj.title}
                        description={courseObj.description}
                    />

                    <div className="mt-8">
                        <WhatYouWillLearnListWrapper>
                            {learnBullets}
                        </WhatYouWillLearnListWrapper>
                    </div>
                    <div className="mt-8">
                        <CourseIncludesWrapper>
                            {includesBulles}
                        </CourseIncludesWrapper>
                        <ProgressBar 
                            owned={owned}
                            progress={progress}

                        />
                    </div>
                </div>
                <CourseFirstDivPricing price={courseObj.price} owned={owned} />
                


            </div>
        </div>
    )
}

export default CourseFirstDiv
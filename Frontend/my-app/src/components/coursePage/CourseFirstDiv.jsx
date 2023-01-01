import React from 'react'
import CourseFirstDivTitleAndDescription from './CourseFirstDivTitleAndDescription'
import WhatYouWillLearnBulletPoint from './WhatYouWillLearnBulletPoint'
import WhatYouWillLearnListWrapper from './WhatYouWillLearnListWrapper'
import CourseIncludesWrapper from './CourseIncludesWrapper'
import CourseIncludesBulletPoint from './CourseIncludesBulletPoint'
import CourseFirstDivPricing from './CourseFirstDivPricing'
import ProgressBar from './ProgressBar'


const CourseFirstDiv = ({ owned, courseObj, progress, intendedCourse }) => {
    const learnBullets = courseObj.whatYouWillLearnBullets.map((bullet) => <WhatYouWillLearnBulletPoint text={bullet} />)
    const includesBulles = courseObj.courseIncludes.map((bullet) => <CourseIncludesBulletPoint text={bullet} />)
    return (
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
            <div className="pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                <div className="bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12">
                    <CourseFirstDivTitleAndDescription
                        title={intendedCourse.title}
                        description={intendedCourse.description +
                            `this is a very very very very big description description description description description description description description description description`}
                    />

                    <div className="mt-8">
                        <WhatYouWillLearnListWrapper>
                            <WhatYouWillLearnBulletPoint text={intendedCourse.firstBullet} />
                            <WhatYouWillLearnBulletPoint text={intendedCourse.secondBullet} />
                            <WhatYouWillLearnBulletPoint text={intendedCourse.thirdBullet} />
                        </WhatYouWillLearnListWrapper>
                    </div>
                    <div className="mt-8">
                        <CourseIncludesWrapper>
                            <CourseIncludesBulletPoint text={intendedCourse.firstInclude} />
                            <CourseIncludesBulletPoint text={intendedCourse.secondInclude} />
                            <CourseIncludesBulletPoint text={intendedCourse.thirdInclude} />
                        </CourseIncludesWrapper>
                        <ProgressBar
                            owned={owned}
                            progress={progress}

                        />
                    </div>
                </div>
                <CourseFirstDivPricing price={intendedCourse.price} owned={owned} />



            </div>
        </div>
    )
}

export default CourseFirstDiv
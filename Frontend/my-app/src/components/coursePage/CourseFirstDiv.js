import React from 'react'
import CourseFirstDivTitleAndDescription from './CourseFirstDivTitleAndDescription'
import WhatYouWillLearnBulletPoint from './WhatYouWillLearnBulletPoint'
import WhatYouWillLearnListWrapper from './WhatYouWillLearnListWrapper'
import CourseIncludesWrapper from './CourseIncludesWrapper'
import CourseIncludesBulletPoint from './CourseIncludesBulletPoint'
import CourseFirstDivPricing from './CourseFirstDivPricing'
const CourseFirstDiv = ({ owned }) => {
    return (
        <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
            <div class="pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                <div class="bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12">
                    <CourseFirstDivTitleAndDescription
                        title={"Learn Python: The Complete Python Programming Course"}
                        description={"Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!"}
                    />

                    <div class="mt-8">
                        <WhatYouWillLearnListWrapper>
                            <WhatYouWillLearnBulletPoint text={"Lorem ipsum"} />
                            <WhatYouWillLearnBulletPoint text={"Lorem ipsum"} />
                            <WhatYouWillLearnBulletPoint text={"Lorem ipsum"} />
                            <WhatYouWillLearnBulletPoint text={"Lorem ipsum"} />
                            <WhatYouWillLearnBulletPoint text={"Lorem ipsum"} />
                        </WhatYouWillLearnListWrapper>
                    </div>
                    <div class="mt-8">
                        <CourseIncludesWrapper>
                            <CourseIncludesBulletPoint text={"Lorem ipsum"} />
                            <CourseIncludesBulletPoint text={"Lorem ipsum"} />
                            <CourseIncludesBulletPoint text={"17 Hours Total"} />
                        </CourseIncludesWrapper>
                    </div>
                </div>
                <CourseFirstDivPricing price={9.99} owned={owned} />
            </div>
        </div>
    )
}

export default CourseFirstDiv
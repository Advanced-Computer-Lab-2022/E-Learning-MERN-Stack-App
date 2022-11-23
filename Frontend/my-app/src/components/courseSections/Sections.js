import React from 'react'
import SectionItem from './SectionItem'

const Sections = ({ visible }) => {
    if (visible)
        return (
            <>
                <h2 class=" mx-36 mb-8 text-4xl tracking-tight font-extrabold text-blue-500">Course Content</h2>
                <div className='mx-36 border-b-gray-200 border-b' />
                <div className='mx-40 my-10 shadow-xl'>

                    <SectionItem
                        text={"Section 1"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat venenatis nunc, placerat ultricies ligula venenatis eu. Phasellus nisl augue, pulvinar id ullamcorper ac, lobortis sed elit. Sed arcu eros, suscipit nec nisl eget, ultricies accumsan lacus. In posuere leo id purus eleifend, quis pulvinar neque sagittis."}
                    />
                    <SectionItem
                        text={"Section 2"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat venenatis nunc, placerat ultricies ligula venenatis eu. Phasellus nisl augue, pulvinar id ullamcorper ac, lobortis sed elit. Sed arcu eros, suscipit nec nisl eget, ultricies accumsan lacus. In posuere leo id purus eleifend, quis pulvinar neque sagittis."}
                    />
                    <SectionItem
                        text={"Section 3"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat venenatis nunc, placerat ultricies ligula venenatis eu. Phasellus nisl augue, pulvinar id ullamcorper ac, lobortis sed elit. Sed arcu eros, suscipit nec nisl eget, ultricies accumsan lacus. In posuere leo id purus eleifend, quis pulvinar neque sagittis."}
                    />
                    <SectionItem
                        text={"Section 4"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat venenatis nunc, placerat ultricies ligula venenatis eu. Phasellus nisl augue, pulvinar id ullamcorper ac, lobortis sed elit. Sed arcu eros, suscipit nec nisl eget, ultricies accumsan lacus. In posuere leo id purus eleifend, quis pulvinar neque sagittis."}
                    />
                </div>
            </>

        )
}

export default Sections
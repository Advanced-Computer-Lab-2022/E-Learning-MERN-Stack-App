import React from 'react'
import SectionItem from './SectionItem'

const Sections = () => {
    return (
        <div className='w-3/4 m-auto'>

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

    )
}

export default Sections
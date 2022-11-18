import React from 'react'
import SmallScreenCloseButton from './SmallScreenCloseButton'
import SmallScreenLogo from './SmallScreenLogo'

const SmallScreenHeader = ({ setActiveSmallScreen }) => {
    return (
        <div class="flex items-center mb-8">
            <SmallScreenLogo />
            <SmallScreenCloseButton setActiveSmallScreen={setActiveSmallScreen} />
        </div>
    )
}

export default SmallScreenHeader
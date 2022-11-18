import React from 'react'

const FooterList = ({ text, children }) => {
    return (
        <div class="mb-6">
            <h5 class="uppercase font-bold mb-2.5">{text}</h5>
            <ul class="list-none mb-0">
                {children}
            </ul>
        </div>
    )
}

export default FooterList
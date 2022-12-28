import React from 'react'

const FooterList = ({ text, children }) => {
    return (
        <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5">{text}</h5>
            <ul className="list-none mb-0">
                {children}
            </ul>
        </div>
    )
}

export default FooterList
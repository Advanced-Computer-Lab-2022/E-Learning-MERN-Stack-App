import React from 'react'

const CardsHolder = ({ children }) => {
    return (
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {children}
        </div>
    )
}

export default CardsHolder
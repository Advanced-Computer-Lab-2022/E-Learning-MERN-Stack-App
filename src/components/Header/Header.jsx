import React from 'react'

export default function Header() {
    return (
        <>
            <header>
                <h1 className='mt-4 ms-4'>My Courses</h1>
                <div className="input-group">
                    <div className="form-outline w-75 ms-4 mt-2">
                        <label className="form-label" htmlFor="search-focus"></label>
                        <input id="search-focus" type="search" className="form-control" placeholder="Search" />
                    </div>
                </div>
            </header>
        </>
    )
}

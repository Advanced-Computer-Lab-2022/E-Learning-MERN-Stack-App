import React from 'react'

export default function Header() {
    return (
        <>
            <header>
                <h1 className='mt-4 ms-4'>My Courses</h1>
                <div class="input-group">
                    <div class="form-outline w-75 ms-4 mt-2">
                        <input id="search-focus" type="search" class="form-control" placeholder="Search" />
                        <label class="form-label" for="search-focus"></label>
                    </div>
                    <button type="button" class="btn btn-primary h-100 mt-2">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </header>
        </>
    )
}

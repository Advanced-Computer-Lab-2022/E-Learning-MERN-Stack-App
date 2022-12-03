import React from 'react'
import './Filter.css'

export default function Filter() {
    return (
        <>
            <div className="subject">
                {/* <hr /> */}
                <h3>Subject</h3>
                <select class="select form-select w-75 text-center m-auto" data-mdb-filter="true">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="price">
                <h3>Price</h3>
                <p className='text-black-50'>from</p>
                <input type="number" name="from" id="from" />
                <p className='text-black-50'>to</p>
                <input type="number" name="to" id="to" />
                <br />
                <button type="submit" class="btn btn-primary mt-5" aria-label="Close">
                    Apply Changes
                </button>
            </div>
        </>
    )
}

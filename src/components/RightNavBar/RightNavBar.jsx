import React from 'react'
import { Link } from 'react-router-dom';
import './RightNavBar.css'

export default function RightNavBar() {

  return (
    <>
      <ul className='mt-5 list-unstyled'>
        <li className='mt-3'><Link className="btn btn-dark w-100" to='/instructor/mycourses' role="button">My Courses</Link></li>
        <li className='mt-3'><Link className="btn btn-dark w-100" to='/instructor/viewmoneyowed' role="button">View money owed</Link></li>
        <li className='mt-3'><Link className="btn btn-dark w-100" to='/instructor/createacourse' role="button">Create a Course</Link></li>
        <li className='mt-3'><Link className="btn btn-dark w-100" to='/instructor/editaccountinfo' role="button">Edit Account info</Link></li>
      </ul>
    </>
  );
}

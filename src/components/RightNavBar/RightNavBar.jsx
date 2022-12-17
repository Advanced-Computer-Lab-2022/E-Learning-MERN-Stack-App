import React from 'react'
import { Link } from 'react-router-dom';
import './RightNavBar.css'

export default function RightNavBar() {

  return (
    <>
      <ul className='mt-5 list-unstyled'>
        <li className='mt-3'><Link className="btn btn-dark w-100" to='/mycourses' role="button">My Courses</Link></li>
        <li className='mt-3'><Link className="btn btn-dark w-100" to='/viewmoneyowed' role="button">View money owed</Link></li>
        <li className='mt-3'><Link className="btn btn-dark w-100" to='/createacourse' role="button">Create a Course</Link></li>
        <li className='mt-3'><Link className="btn btn-dark w-100" to='/editaccountinfo' role="button">Edit Account info</Link></li>
      </ul>
    </>
  );
}

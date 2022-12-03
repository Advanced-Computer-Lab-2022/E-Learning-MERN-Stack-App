import React from 'react'
import { Link } from 'react-router-dom';
import './RightNavBar.css'

export default function RightNavBar() {

  return (
    <>
      <ul className='mt-5'>
        <li className='mt-3 list-unstyled'><Link className="btn btn-dark w-100" to='/mycourses' role="button">My Courses</Link></li>
        <li className='mt-3 list-unstyled'><Link className="btn btn-dark w-100" to='/viewmoneyowed' role="button">View money owed</Link></li>
        <li className='mt-3 list-unstyled'><Link className="btn btn-dark w-100" to='/createacourse' role="button">Create a Course</Link></li>
        <li className='mt-3 list-unstyled'><Link className="btn btn-dark w-100" to='/editaccountinfo' role="button">Edit Account info</Link></li>
      </ul>
      {/* <ul className='mt-5 w-100 list-unstyled'>
        <li className='mt-3'><a class="btn btn-dark w-100" href="#1" role="button">My Courses</a></li>
        <li className='mt-3'><a class="btn btn-dark w-100" href="#1" role="button">View money owed</a></li>
        <li className='mt-3'><a class="btn btn-dark w-100" href="#1" role="button">Create a Course</a></li>
        <li className='mt-3'><a class="btn btn-dark w-100" href="#1" role="button">Edit Account info</a></li>
      </ul> */}
      {/* <div class="list-group" id="myList" role="tablist">
              <a class="list-group-item list-group-item-action active" data-toggle="list" href="#home" role="tab">My Courses</a>
              <a class="list-group-item list-group-item-action" data-toggle="list" href="#profile" role="tab">View Money owed</a>
              <a class="list-group-item list-group-item-action" data-toggle="list" href="#messages" role="tab">Create a Course</a>
              <a class="list-group-item list-group-item-action" data-toggle="list" href="#settings" role="tab">Edit Account Info</a>
            </div>
            
            <div class="tab-content">
              <div class="tab-pane active" id="home" role="tabpanel">...</div>
              <div class="tab-pane" id="profile" role="tabpanel">...</div>
              <div class="tab-pane" id="messages" role="tabpanel">...</div>
              <div class="tab-pane" id="settings" role="tabpanel">...</div>
            </div> */}
    </>
  );
}

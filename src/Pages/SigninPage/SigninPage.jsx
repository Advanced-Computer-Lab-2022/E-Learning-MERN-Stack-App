import { Axios } from 'axios';
import React, { useState } from 'react'
import RightNavBar from '../../components/RightNavBar/RightNavBar'

export default function CreateCourePage() {
    const [authentication, setAuthentication] = useState({ username: "", password: "" });

    function handleSubmit() {
        // Axios.post('http://localhost:3000/instructor/signin', course);
        console.log('course is submitted!');
    }
    function handleUsernameChange(event) {
        setAuthentication({
            ...authentication,
            username: event.target.value
        });
        console.log('username changed!!!')
    }
    function handlePasswordChange(event) {
        setAuthentication({
            ...authentication,
            password: event.target.value
        });
    }
    return (
        <>
            <div class="container-fluid">
                <div class="row">

                    <section class="col-9 vh-100">
                        <h1>Instructor Signin</h1>
                        <form class="g-3 needs-validation" novalidate>
                            <div class="ms-3 mt-3 w-50">
                                <label for="username" class="form-label" onChange={handleUsernameChange()}>Username</label>
                                <input type="text" class="form-control" id="username" value={authentication.username} required />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="ms-3 mt-3 w-50">
                                <label for="password" class="form-label" onChange={handlePasswordChange()}>Password</label>
                                <input type="text" class="form-control" id="password" value={authentication.password} required />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="ms-3 mt-4 w-50">
                                <button class="btn btn-primary" type="submit">Create Course</button>
                            </div>
                        </form>
                    </section>

                    <aside class="col-3 vh-100 text-center">
                        <div className='rightNavBar overflow-hidden'>
                            <RightNavBar />
                        </div>
                    </aside>

                </div>
            </div>

        </>
    )
}

// import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import RightNavBar from '../../components/RightNavBar/RightNavBar'


export default function EditAccountInfoPage() {

    const [accountInfo, setAccountInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        bio: ""
    });

    // function handleSubmit() {
    //     axios.post('http://localhost:8000/instructor/editaccountinfo', accountInfo);
    // }
    function handleFirstNameChange(e) {
        setAccountInfo({
            ...accountInfo,
            firstName: e.target.value
        })
        console.log(accountInfo);
    }
    function handleLastNameChange(e) {
        setAccountInfo({
            ...accountInfo,
            lastName: e.target.value
        })
        console.log(accountInfo);
    }
    function handleEmailChange(e) {
        setAccountInfo({
            ...accountInfo,
            email: e.target.value
        })
        console.log(accountInfo);
    }
    function handleBioChange(e) {
        setAccountInfo({
            ...accountInfo,
            bio: e.target.value
        })
        console.log(accountInfo);
    }

    return (
        <div className="container-fluid">
            <div className="row">

                <section className="col-9 vh-100">
                    <form className="g-3 needs-validation ms-4 mt-4" noValidate >
                        <h1>Instructor Name</h1>
                        <div className="ms-3 mt-3 w-50">
                            <label htmlFor="firstName" className="form-label">First name</label>
                            <input type="text" className="form-control" id="firstName" required onChange={e => handleFirstNameChange(e)} />
                        </div>
                        <div className="ms-3 mt-3 w-50">
                            <label htmlFor="lastName" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="lastName" required onChange={e => handleLastNameChange(e)} />
                        </div>
                        <div className="ms-3 mt-3 w-50">
                            <label htmlFor="email" className="form-label">Email</label>
                            <div className="input-group">
                                <span className="input-group-text" id="email">@</span>
                                <input type="email" className="form-control" id="email" aria-describedby="inputGroupPrepend" required onChange={e => handleEmailChange(e)} />
                            </div>
                        </div>
                        <div className="ms-3 mt-3 w-50">
                            <label htmlFor="bio" className="form-label">Bio</label>
                            <textarea type="text" className="form-control" id="bio" onChange={e => handleBioChange(e)} />
                        </div>
                        <div className="ms-3 mt-4 w-50">
                            <button className="btn btn-primary" type="submit">Submit Changes</button>
                        </div>
                    </form>
                </section>

                <aside className="col-3 vh-100 text-center">
                    <div className="rightNavBar overflow-hidden">
                        <RightNavBar />
                    </div>
                </aside>

            </div>
        </div>
    )
}

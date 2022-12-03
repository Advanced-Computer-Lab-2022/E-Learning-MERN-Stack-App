import React, { useState } from 'react'
import RightNavBar from '../../components/RightNavBar/RightNavBar'


export default function EditAccountInfoPage() {
    return (
        <>
            <div class="container-fluid">
                <div class="row">

                    <section class="col-9 vh-100">
                        <h1>Instructor Name</h1>
                        <form class="g-3 needs-validation" novalidate>
                            <div class="ms-3 mt-3 w-50">
                                <label for="validationCustom01" class="form-label">First name</label>
                                <input type="text" class="form-control" id="validationCustom01" required />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="ms-3 mt-3 w-50">
                                <label for="validationCustom02" class="form-label">Last name</label>
                                <input type="text" class="form-control" id="validationCustom02" required />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="ms-3 mt-3 w-50">
                                <label for="validationCustom02" class="form-label">Bio</label>
                                <input type="text" class="form-control" id="validationCustom02" required />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="ms-3 mt-3 w-50">
                                <label for="validationCustomUsername" class="form-label">Email</label>
                                <div class="input-group">
                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="email" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                    <div class="invalid-feedback">
                                        Please choose a Email.
                                    </div>
                                </div>
                            </div>
                            <div class="ms-3 mt-4 w-50">
                                <button class="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </section>

                    <aside class="col-3 vh-100 text-center">
                        <div className="rightNavBar overflow-hidden">
                            <RightNavBar />
                        </div>
                    </aside>

                </div>
            </div>

        </>
    )
}

import React from 'react'
import Reviews from '../../components/Reviews/Reviews.jsx'

export default function CoursePage() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <section className="col-9 vh-100">
                        <h1>Course Title</h1>
                        <Reviews />
                    </section>

                    <aside className="col-3 vh-100 text-center">
                        <div className="rightNavBar overflow-hidden">
                            <div class="list-group" id="myList" role="tablist">
                                <a class="list-group-item list-group-item-action active ms-0" data-toggle="list" href="#home" role="tab">Create an MCQ Exam</a>
                                <a class="list-group-item list-group-item-action ms-0" data-toggle="list" href="#settings" role="tab">Add Promotion</a>
                            </div>

                            <div class="tab-content">
                                <div class="tab-pane" id="mcq" role="tabpanel">.love..</div>
                                <div class="tab-pane" id="promotion" role="tabpanel">...</div>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </>
    )
}

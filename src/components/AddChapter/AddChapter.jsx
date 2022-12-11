import React from 'react'

export default function AddChapter() {
    return (
        <>
            <div className="container bg-danger">
                <h1 className='text-center'>Add Chapter</h1>
                <form className="g-3 needs-validation" noValidate>
                    <div className="ms-3 mt-3 w-75">
                        <label htmlFor="text" className="form-label">Text</label>
                        <input type="text" className="form-control" id="text" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="ms-3 mt-3 w-75">
                        <label htmlFor="video" className="form-label">Video</label>
                        <input type="text" className="form-control" id="video" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="ms-3 mt-3 w-75">
                        <label htmlFor="quiz" className="form-label">Upload Quiz</label>
                        <input type="file" className="form-control" id="quiz" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="ms-3 mt-4 w-75">
                        <button className="btn btn-primary" type="submit">Add Chapter</button>
                    </div>
                </form>

            </div>
        </>
    )
}

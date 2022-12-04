import React from 'react'

export default function AddChapter() {
    return (
        <>
            <div className="container bg-danger">
                <h1 className='text-center'>Add Chapter</h1>
                <form class="g-3 needs-validation" novalidate>
                    <div class="ms-3 mt-3 w-75">
                        <label for="text" class="form-label">Text</label>
                        <input type="text" class="form-control" id="text" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="ms-3 mt-3 w-75">
                        <label for="video" class="form-label">Video</label>
                        <input type="text" class="form-control" id="video" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="ms-3 mt-3 w-75">
                        <label for="quiz" class="form-label">Upload Quiz</label>
                        <input type="file" class="form-control" id="quiz" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="ms-3 mt-4 w-75">
                        <button class="btn btn-primary" type="submit">Add Chapter</button>
                    </div>
                </form>

            </div>
        </>
    )
}

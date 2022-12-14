import axios from 'axios';
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { coursesContext } from '../../Contexts/CoursesContext';

export default function Chapters() {
    const { courses } = useContext(coursesContext);
    const { id } = useParams();

    // var coursesStructuredClone = global.structuredClone(courses);


    async function addVideo(chapterIndex, newVideo) {
        // console.log(await axios.post('http://localhost:800/addVideo/', document.getElementById('addVideo').value));

        // reload page to get view with the new video when a new render happens (see useEffect in CoursesContext.jsx)
        window.location.reload(true);
    }


    async function addQuiz() {
        console.log(await axios.post('http://localhost:800/addQuiz/', document.getElementById('addVideo').value));

        // reload page to get view with the new video when a new render happens (see useEffect in CoursesContext.jsx)
        window.location.reload(true);
    }

    return (
        <>
            <h1 className='text-bg-info text-center ms-4 me-4'>Chapters</h1>
            <ol className='ps-4 pe-4'>
                {
                    // View all chapters
                    courses[id].chapters.map((chapter, chapterIndex) => {
                        return <ol className='bg-danger mt-3'>
                            <h3>{chapter.text}</h3>
                            <ol>
                                {
                                    // View all videos inside a chapter
                                    chapter.videos.map((video, videoIndex) =>
                                        <div key={videoIndex} className="embed-responsive embed-responsive-16by9">
                                            <iframe title="vid1" className="embed-responsive-item w-75" src={video} allowFullScreen></iframe>
                                        </div>
                                    )
                                }
                                {/* Add a video inside a chapter */}
                                <label htmlFor="addVideo">Add Video</label>
                                <input type="text" name="addVideo" id="addVideo" />
                                <button type="submit" onClick={() => addVideo()}>Add Video</button>
                            </ol>

                            <ol>
                                {
                                    // View all quizzes inside a chapter
                                    chapter.quizes.map((quiz, quizIndex) => <div key={quizIndex}><p className='text-white'>{quiz}</p></div>)
                                }
                                <label htmlFor="addQuiz">Add Quiz</label>
                                <textarea type="text" name="addQuiz" id="addQuiz" />
                                <button type="submit" onClick={() => addQuiz()}>Add Quiz</button>
                            </ol>
                        </ol>
                    }
                    )
                }
            </ol>
        </>
    )
}

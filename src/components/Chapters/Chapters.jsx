import React, { useContext } from 'react'
import { coursesContext } from '../../Contexts/CoursesContext';

export default function Chapters(props) {
    const { courses } = useContext(coursesContext);

    return (
        <>
            <h1 className='text-bg-info text-center ms-4 me-4'>Chapters</h1>
            <ol className='ps-4 pe-4'>
                {
                    courses[props.index].chapters.map(chapter =>
                        <ol className='bg-danger mt-3'>
                            <h3>{chapter.text}</h3>
                            <ol>
                                {
                                    chapter.videos.map(video =>
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe title="vid1" className="embed-responsive-item w-75" src={video} allowfullscreen></iframe>
                                        </div>
                                    )
                                }
                                <label htmlFor="addVideo">Add Video</label>
                                <input type="text" name="addVideo" id="addVideo" />
                                <button type="submit">Add Video</button>
                            </ol>

                            <ol>
                                {
                                    chapter.quizes.map((quiz, index) => <div><p className='text-white'>{quiz}</p></div>)
                                }
                                <label htmlFor="addQuiz">Add Quiz</label>
                                <textarea type="text" name="addQuiz" id="addQuiz" />
                                <button type="submit">Add Quiz</button>
                            </ol>
                        </ol>
                    )
                }
            </ol>
        </>
    )
}

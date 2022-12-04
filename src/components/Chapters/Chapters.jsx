import { Axios } from 'axios';
import React, { useEffect, useState } from 'react'

export default function Chapters() {
    const [course, setCourse] = useState({
        name: "",
        title: "",
        description: "",
        mainPicture: {},
        shortVideo: {},
        price: 0,
        createdBy: "",
        category: "",
        chapters: [{
            videos: {},
            text: "",
            quizes: {}
        }]
    });
    return (
        <>
            <h1 className='text-bg-info text-center ms-4 me-4'>Chapters</h1>
            <ol className='ps-4 pe-4'>
                {
                    course.chapters.map(chapter =>
                        <ol className='bg-danger'>
                            <p>chapter.text</p>

                            <ol>
                                {
                                    chapter.videos.map(video =>
                                        <div class="embed-responsive embed-responsive-16by9">
                                            <iframe title="vid1" className="embed-responsive-item" src={video} allowfullscreen></iframe>
                                        </div>
                                    )
                                }
                            </ol>

                            <ol>
                                {
                                    chapter.quizes.map((quiz, index) => <button className='btn btn-info w-75'>Quiz{index} Link: {quiz} </button>)
                                }
                            </ol>
                        </ol>
                    )
                }
            </ol>
        </>
    )
}

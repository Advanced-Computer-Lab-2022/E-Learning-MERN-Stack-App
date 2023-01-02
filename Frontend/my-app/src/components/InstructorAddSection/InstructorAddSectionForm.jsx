import React, { useState } from 'react';
import axios from 'axios'
import { useCookies } from 'react-cookie';

const InstructorAddSectionForm = () => {
    const [cookies] = useCookies(['token']);

    const [section, setSection] = useState({
        title: '',
        lessonEmbed: '',
        lessonDescription: '',
        testId: '',
        courseId: ''
    });
    const [courses, setCourses] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    function handleSubmit(e) {

        axios.get('http://localhost:8000/api/instructor/getCourses', {
            headers: {
                authorization: cookies['token']
            }
        })
            .then((response) => {
                console.log(response);
                setCourses(response.data)
            })

        axios.post('http://localhost:8000/api/instructor/addSection', section, {
            headers: {
                authorization: cookies['token']
            }
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
                switch (error.code) {
                    case 'ERR_BAD_REQUEST':
                        setErrorMessage('Please submit a valid section');
                        break;
                    case 'ERR_NETWORK':
                        setErrorMessage(`Please make sure you're connected to the internet`);
                        break;
                    default:
                }
            });

    }

    function handleTitleChange(e) {
        setSection({
            ...section,
            title: e.target.value
        });
        console.log(section);
    }
    function handleLessonVideoChange(e) {
        setSection({
            ...section,
            lessonEmbed: <iframe width="650" height="300" src={e.target.value} title={section.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        });
        console.log(section);
    }
    function handleLessonDescriptionChange(e) {
        setSection({
            ...section,
            lessonDescription: e.target.value
        });
        console.log(section);
    }
    function handleCoursesChoiceChange(e) {
        setSection({
            ...section,
            courseId: e.target.value
        })
    }


    return (
        <form className="flex flex-col pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Section's Title" onChange={e => handleTitleChange(e)} />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <textarea type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Lesson Description" onChange={e => handleLessonDescriptionChange(e)} />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Short Video Link" onChange={e => handleLessonVideoChange(e)} />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative">
                    <select name="coursesChoice" className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-800 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" onChange={e => handleCoursesChoiceChange(e)} >
                        <option disabled selected>Select Course</option>
                        {
                            courses.map(course => <option value={course._id}>{course.title}</option>)
                        }
                    </select>
                </div>
            </div>
            <button type="button" className="mt-6 w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-500 shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
                onClick={e => handleSubmit(e)}>
                <span className="w-full">
                    Add Section
                </span>
            </button>
            <p className="mt-3 text-md text-center text-red-600">{errorMessage}</p>

        </form >
    )
}

export default InstructorAddSectionForm
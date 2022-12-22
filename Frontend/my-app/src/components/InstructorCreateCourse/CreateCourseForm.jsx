import React, { useContext, useState } from 'react';
import axios from 'axios'
import { useCookies } from 'react-cookie';

const CreateCourseForm = () => {
    const [cookies] = useCookies(['token']);

    const [course, setCourse] = useState({
        name: '',
        title: '',
        description: '',
        shortVideo: '',
        price: '',
        discount: '',
        category: '',
        chapters: []
    });
    const [errorMessage, setErrorMessage] = useState("");
    var api = 'http://localhost:8000/api/instructor/createCourse';

    async function handleSubmit(e) {
        await axios.post(api, course, {
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
                        setErrorMessage('Please submit a valid course');
                        break;
                    case 'ERR_NETWORK':
                        setErrorMessage(`Please make sure you're connected to the internet`);
                        break;
                    default:
                }
            });

    }

    function handleNameChange(e) {
        setCourse({
            ...course,
            name: e.target.value
        });
        console.log(course);
    }
    function handleTitleChange(e) {
        setCourse({
            ...course,
            title: e.target.value
        });
        console.log(course);
    }
    function handleDescriptionChange(e) {
        setCourse({
            ...course,
            description: e.target.value
        });
        console.log(course);
    }
    function handleShortVideoChange(e) {
        setCourse({
            ...course,
            shortVideo: e.target.value
        });
        console.log(course);
    }
    function handlePriceChagne(e) {
        setCourse({
            ...course,
            price: e.target.value
        });
        console.log(course);
    }
    function handleDiscountChange(e) {
        setCourse({
            ...course,
            discount: e.target.value
        });
        console.log(course);
    }
    function handleCategoryChange(e) {
        setCourse({
            ...course,
            category: e.target.value
        });
        console.log(course);
    }

    return (
        <form className="flex flex-col pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Name" onChange={e => handleNameChange(e)} />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Title" onChange={e => handleTitleChange(e)} />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <textarea type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Description" onChange={e => handleDescriptionChange(e)} />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Short Video Link" onChange={e => handleShortVideoChange(e)} />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Price" onChange={e => handlePriceChagne(e)} />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Discount in Percentage" onChange={e => handleDiscountChange(e)} />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Category" onChange={e => handleCategoryChange(e)} />
                </div>
            </div>
            <button type="button" className="mt-6 w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-500 shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
                onClick={e => handleSubmit(e)}>
                <span className="w-full">
                    Create a Course
                </span>
            </button>
            <p className="mt-3 text-md text-center text-red-600">{errorMessage}</p>
        </form >
    )
}

export default CreateCourseForm
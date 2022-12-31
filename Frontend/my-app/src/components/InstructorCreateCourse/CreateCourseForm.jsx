import React, { useContext, useState } from 'react';
import axios from 'axios'
import { useCookies } from 'react-cookie';

const CreateCourseForm = () => {
    const [cookies] = useCookies(['token']);

    const [course, setCourse] = useState({
        title: '',
        description: '',
        category: '',
        price: '',
        previewVideoTitle: '',
        previewVideoURL: '',
        discount: '',
        firstBullet: '',
        secondBullet: '',
        thirdBullet: '',
        firstInclude: '',
        secondInclude: '',
        thirdInclude: ''
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
    function handleCategoryChange(e) {
        setCourse({
            ...course,
            category: e.target.value
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
    function handlePreviewVideoTitleChange(e) {
        setCourse({
            ...course,
            previewVideoTitle: e.target.value
        });
        console.log(course);
    }
    function handlePreviewVideoURLChange(e) {
        setCourse({
            ...course,
            previewVideoURL: e.target.value
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
    function handleFirstBulletChange(e) {
        setCourse({
            ...course,
            firstBullet: e.target.value
        });
        console.log(course);
    }
    function handleSecondBulletChange(e) {
        setCourse({
            ...course,
            secondBullet: e.target.value
        });
        console.log(course);
    }
    function handleThirdBulletChange(e) {
        setCourse({
            ...course,
            thirdBullet: e.target.value
        });
        console.log(course);
    }
    function handleFirstIncludeChange(e) {
        setCourse({
            ...course,
            firstInclude: e.target.value
        })
        console.log(course);
    }
    function handleSecondIncludeChange(e) {
        setCourse({
            ...course,
            secondInclude: e.target.value
        })
        console.log(course);
    }
    function handleThirdIncludeChange(e) {
        setCourse({
            ...course,
            thirdInclude: e.target.value
        })
        console.log(course);
    }

    return (
        <form className="flex flex-col pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Title" onChange={e => handleTitleChange(e)} />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="description" onChange={e => handleDescriptionChange(e)} />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="category" onChange={e => handleCategoryChange(e)} />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="price" onChange={e => handlePriceChagne(e)} />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="previewVideoTitle" onChange={e => handlePreviewVideoTitleChange(e)} />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="previewVideoURL" onChange={e => handlePreviewVideoURLChange(e)} />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="discount" onChange={e => handleDiscountChange(e)} />
                </div>
            </div>
            <h3>What you will learn bullets</h3>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="firstBullet" onChange={e => handleFirstBulletChange(e)} />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="secondBullet" onChange={e => handleSecondBulletChange(e)} />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="thirdBullet" onChange={e => handleThirdBulletChange(e)} />
                </div>
            </div>
            <h3>Course Includes</h3>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="firstInclude" onChange={e => handleFirstIncludeChange(e)} />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="secondInclude" onChange={e => handleSecondIncludeChange(e)} />
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="thirdInclude" onChange={e => handleThirdIncludeChange(e)} />
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
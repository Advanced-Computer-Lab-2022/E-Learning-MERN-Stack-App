import React, { useState } from 'react'

const ContactUs = ({ visible }) => {

    const [comments, setComments] = useState(['first comment']);
    const [message, setMessage] = useState('');

    function addCommentMessage(e) {
        setComments([
            ...comments,
            message
        ])
    }

    function saveCommentMessge(e) {
        setMessage(e.target.value);
    }



    if (visible)
        return (
            <>
                {/* {
                    comments.map(comment =>
                        <div class="flex items-center justify-center bg-white dark:bg-gray-800">
                            <div class="bg-white dark:bg-gray-800 text-black dark:text-gray-200 p-4 antialiased flex max-w-lg">
                                <img class="rounded-full h-8 w-8 mr-2 mt-1 " src="https://picsum.photos/id/1027/200/200" alt='dummyImage' />
                                <div>
                                    <div class="bg-gray-100 dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
                                        <div class="font-semibold text-sm leading-relaxed">Jon Doe</div>
                                        <div class="text-normal leading-snug md:leading-normal"
                                        >{comment}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } */}

                <div class="w-full md:w-2/3 mx-auto p-5 bg-white rounded-lg shadow">
                    <div class="flex items-center justify-between">
                        <div class="w-2/3">
                            <h2 class="section-heading">
                                Questions and Answer
                            </h2>
                        </div>
                    </div>

                    <div class="mt-8 space-y-8">
                        <div>
                            <div class="flex items-start">
                                <div>
                                    <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-green-500 text-white font-medium text-sm">
                                        Q
                                    </span>
                                </div>

                                <p class="ml-4 md:ml-6">
                                    Can we have extra parking space for this unit?
                                </p>
                            </div>

                            <div class="flex items-start mt-3">
                                <div>
                                    <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
                                        A
                                    </span>
                                </div>

                                <p class="ml-4 md:ml-6 text-gray-800">
                                    Yes you can get extra parking space but you have to pay extra monthly.
                                </p>
                            </div>

                            <div class="grid grid-cols-2 gap-4 md:flex md:items-center mt-8 md:ml-12">
                                <div class="flex items-center md:ml-8">
                                    <div class="mr-2 w-6 h-6 overflow-hidden shadow rounded-full border-gray-500">
                                        <div class="w-full h-full bg-gray-200"></div>
                                    </div>

                                    <span class="text-sm text-gray-800">
                                        Jason
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mx-auto max-w-lg rounded-lg shadow-md shadow-blue-600/50">
                    <form action="" class="w-full p-4">
                        <div class="mb-2">
                            <label for="comment" class="text-lg text-gray-600">Add a comment</label>
                            <textarea
                                class="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                                name="comment"
                                placeholder="" onChange={e => saveCommentMessge(e)}></textarea>
                        </div>
                        <div>
                            <button type='button' class=" px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded" onClick={() => addCommentMessage()}>
                                Comment
                            </button>
                        </div>
                    </form>
                </div>
            </>
        )

}

export default ContactUs
import React from 'react'
import Question from './Question'
import { useState } from 'react'
const TestContent = ({ visible }) => {
    const [first, setFirst] = useState(-1);
    const [second, setSecond] = useState(-1);
    const [third, setThird] = useState(-1);
    const [fourth, setFourth] = useState(-1);
    const [fifth, setFifth] = useState(-1);
    if (visible === 1)
        return (
            <>
                <section class="text-gray-600 body-font overflow-hidden">
                    <div class="container px-20 py-24 mx-auto">
                        <div class="-my-8 divide-y-2 divide-gray-100">
                            <Question
                                topicName={"Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl."}
                                questionDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus lectus, sagittis eget sem sit amet, dictum ullamcorper mi. Proin nisl tellus, auctor at sem in, ultricies vehicula felis. Aliquam erat volutpat?"
                                topicNumber={"Topic 1"}
                            >
                                <div class="flex justify-left py-1 flex-col px-8 pt-5">
                                    <div>
                                        <div onClick={() => setFirst(0)}>
                                            <input checked={first === 0} class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                                            <label class="inline-block text-gray-800 cursor-pointer">
                                                Answer 1: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <div onClick={() => setFirst(1)}>
                                            <input checked={first === 1} class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                                            <label class="inline-block text-gray-800 cursor-pointer">
                                                Answer 2: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </Question>
                            <Question
                                topicName={"Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl."}
                                questionDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus lectus, sagittis eget sem sit amet, dictum ullamcorper mi. Proin nisl tellus, auctor at sem in, ultricies vehicula felis. Aliquam erat volutpat?"
                                topicNumber={"Topic 2"}
                            >
                                <div class="flex justify-left py-1 flex-col px-8 pt-5">
                                    <div>
                                        <div onClick={() => setSecond(0)}>
                                            <input checked={second === 0} class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                                            <label class="inline-block text-gray-800 cursor-pointer">
                                                Answer 1: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <div onClick={() => setSecond(1)}>
                                            <input checked={second === 1} class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                                            <label class="inline-block text-gray-800 cursor-pointer">
                                                Answer 2: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </Question>
                            <Question
                                topicName={"Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl."}
                                questionDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus lectus, sagittis eget sem sit amet, dictum ullamcorper mi. Proin nisl tellus, auctor at sem in, ultricies vehicula felis. Aliquam erat volutpat?"
                                topicNumber={"Topic 3"}
                            >
                                <div class="flex justify-left py-1 flex-col px-8 pt-5">
                                    <div>
                                        <div onClick={() => setThird(0)}>
                                            <input checked={third === 0} class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                                            <label class="inline-block text-gray-800 cursor-pointer">
                                                Answer 1: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <div onClick={() => setThird(1)}>
                                            <input checked={third === 1} class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                                            <label class="inline-block text-gray-800 cursor-pointer">
                                                Answer 2: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </Question>
                            <Question
                                topicName={"Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl."}
                                questionDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus lectus, sagittis eget sem sit amet, dictum ullamcorper mi. Proin nisl tellus, auctor at sem in, ultricies vehicula felis. Aliquam erat volutpat?"
                                topicNumber={"Topic 4"}
                            >
                                <div class="flex justify-left py-1 flex-col px-8 pt-5">
                                    <div>
                                        <div onClick={() => setFourth(0)}>
                                            <input checked={fourth === 0} class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                                            <label class="inline-block text-gray-800 cursor-pointer">
                                                Answer 1: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <div onClick={() => setFourth(1)}>
                                            <input checked={fourth === 1} class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                                            <label class="inline-block text-gray-800 cursor-pointer">
                                                Answer 2: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </Question>
                            <Question
                                topicName={"Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl."}
                                questionDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus lectus, sagittis eget sem sit amet, dictum ullamcorper mi. Proin nisl tellus, auctor at sem in, ultricies vehicula felis. Aliquam erat volutpat?"
                                topicNumber={"Topic 5"}
                            >
                                <div class="flex justify-left py-1 flex-col px-8 pt-5">
                                    <div>
                                        <div onClick={() => setFifth(0)}>
                                            <input checked={fifth === 0} class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                                            <label class="inline-block text-gray-800 cursor-pointer">
                                                Answer 1: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <div onClick={() => setFifth(1)}>
                                            <input checked={fifth === 1} class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                                            <label class="inline-block text-gray-800 cursor-pointer">
                                                Answer 2: Phasellus odio ipsum, pharetra in lacus vel, tempus ornare nisl.
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </Question>
                        </div>
                    </div>
                    <div className='m-auto w-1/2'>
                        <button className='-mx-4 -my-4 mb-20 bg-blue-500 px-16 py-5 text-white font-bold text-lg hover:bg-blue-700 rounded-lg'>
                            Submit
                        </button>
                    </div>
                </section>
            </>
        )
}

export default TestContent
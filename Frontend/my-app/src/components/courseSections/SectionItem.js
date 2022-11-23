import React from 'react'
import { useState } from 'react'
const SectionItem = ({ text, description }) => {
    const [hidden, setHidden] = useState(true);
    if (hidden)
        return (

            <div class="rounded-lg bg-white border border-gray-200 hover:border-gray-500" onClick={() => setHidden(false)}>

                <h2 class=" mb-0" id="headingOne">

                    <button class="
                            relative
                            flex
                            items-center
                            w-full
                            py-4
                            px-5
                            text-xl leading-8  text-gray-900
                            h-10
                            text-left
                            bg-white
                            border-0
                            rounded-none
                            transition
                            focus:outline-none"
                        type="button">
                        {text}
                    </button>
                </h2>

                <div class="py-4 px-5 hidden">
                    {description}
                </div>
            </div>
        )
    else
        return (
            <div class="rounded-lg bg-white border border-gray-200 hover:border-blue-500" onClick={() => setHidden(true)}>
                <h2 class=" mb-0" id="headingOne">
                    <button class="
                            relative
                            flex
                            items-center
                            w-full
                            py-4
                            px-5
                            text-xl
                            font-bold text-blue-800 text-left
                            bg-white
                            border-0
                            rounded-3xl
                            transition
                            focus:outline-none"
                        type="button">
                        {text}
                    </button>
                </h2>
                <div class="py-4 px-5 cursor-pointer">
                    {description}
                </div>
            </div>
        )
}

export default SectionItem
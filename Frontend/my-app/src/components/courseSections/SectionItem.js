import React from 'react'
import { useState } from 'react'
const SectionItem = () => {
    const [hidden, setHidden] = useState(true);
    if (hidden)
        return (
            <div onClick={() => setHidden(false)}>
                <div class="tab w-full overflow-hidden border-t" >
                    <input class="absolute opacity-0" id="tab-single-one" />
                    <label class="block p-5 leading-normal cursor-pointer" for="tab-single-one">Label One</label>
                    <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal hidden" >
                        <p class="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                    </div>
                </div>
            </div >
        )
    else
        return (
            <div>
                <div class="tab w-full overflow-hidden border-t" onClick={() => setHidden(true)}>
                    <input class="absolute opacity-0" id="tab-single-one" />
                    <label class="block p-5 leading-normal cursor-pointer" for="tab-single-one">Label One</label>
                    <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal ">
                        <p class="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                    </div>
                </div>
            </div>
        )
}

export default SectionItem
// import React from 'react'

// const WatchVideoButton = () => {
//     return (
//         <div class="flex relative pb-12">
//             <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
//                 <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
//             </div>
//             <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
//                 <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
//                     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//                 </svg>
//             </div>
//             <div class="flex-grow pl-4">
//                 <h2 class="font-medium title-font text-sm text-blue-500 mb-1 tracking-wider">Watch Video</h2>
//                 <p class="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.</p>
//             </div>
//         </div>
//     )
// }

// export default WatchVideoButton
import React from "react";

export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div>
            <div class="flex relative pb-12 cursor-pointer" onClick={() => setShowModal(true)}>
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                </div>
                <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-blue-500 mb-1 tracking-wider">Watch Video</h2>
                    <p class="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.</p>
                </div>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold text-blue-500">
                                        Watch Lesson
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        <iframe width="650" height="300" src="https://www.youtube.com/embed/Ctqi5Y4X-jA" title="How to Use Strings in Python - Python Tutorial for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-red-500 hover:text-white rounded-lg"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
}
import React from "react";
function saveNotesToDb() {
    // @TODO :: Connet to db and save the written notes to it
    //          Notes is automatically updated every change event 
    //          Most recent value will be in myNotes var
    //          Store my var and use useEffect to get it once the session is initiated
    //          Change should be automatically reflected, since this fucntion is triggered with closing the modal
}
export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    const [myNotes, setMyNotes] = React.useState("My previously written notes published to the db and fetched every session.")
    return (
        <div>
            <div className="flex relative pb-12 cursor-pointer" onClick={() => setShowModal(true)}>
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                </div>
                <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-blue-500 mb-1 tracking-wider">Watch Video</h2>
                    <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.</p>
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
                                <div className="relative p-10 flex-auto">
                                    <div className="flex flex-row my-4">
                                        <iframe width="650" height="300" src="https://www.youtube.com/embed/Ctqi5Y4X-jA" title="How to Use Strings in Python - Python Tutorial for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        <div className="w-1/3 px-5">
                                            <label class="text-gray-700 h-full">
                                                <p className="py-4 font-bold text-blue-500 text-lg">
                                                    My Notes
                                                </p>
                                                <textarea class="flex-1 w-full px-4 h-3/4 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="5" cols="400" onChange={(e) => setMyNotes(e.target.value)}>
                                                    {myNotes}
                                                </textarea>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-red-500 hover:text-white rounded-lg"
                                        type="button"
                                        onClick={() => {
                                            setShowModal(false)
                                            saveNotesToDb();
                                        }}
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
import React from 'react'

const progressBar = ({ owned, progress }) => {
    var prog;
    if (progress < 25) {
        prog = <div class="w-0 h-full text-center text-xs text-white bg-green-500 rounded-full" />
    } else {
        if (progress < 50) {
            prog = <div class="w-1/4 h-full text-center text-xs text-white bg-green-500 rounded-full" />
        }
        else {
            if (progress < 75) {
                prog = <div class="w-1/2 h-full text-center text-xs text-white bg-green-500 rounded-full" />
            }
            else {
                if (progress < 90) {
                    prog = <div class="w-3/4 h-full text-center text-xs text-white bg-green-500 rounded-full" />
                } else {
                    prog = <div class="w-full h-full text-center text-xs text-white bg-green-500 rounded-full" />
                }
            }
        }
    }
    if (owned)
        return (
            <div>
                <div className="flex items-center mt-7">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-blue-500">
                        My Progress
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                </div>
                <div class="block p-4 m-auto bg-white rounded-lg shadow w-72 mx-5 mt-5">
                    <div class="w-full h-2 bg-gray-400 rounded-full mt-3">
                        {prog}
                    </div>
                </div>
            </div>
        )
}

export default progressBar
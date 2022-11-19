import React from 'react'
import Question from './Question'

const Faqs = () => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-blue-500 dark:text-white">Frequently Asked Questions</h2>
                <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                    {/* Left Side */}
                    <div>
                        <Question
                            question={"Question 1?"}
                            answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat aliquam tempus. Phasellus auctor erat turpis, quis laoreet orci luctus eget. Quisque congue ut orci sit amet aliquam."}
                        />
                        <Question
                            question={"Question 2?"}
                            answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat aliquam tempus. Phasellus auctor erat turpis, quis laoreet orci luctus eget. Quisque congue ut orci sit amet aliquam."}
                        />
                    </div>
                    {/* Right Side */}
                    <div>
                        <Question
                            question={"Question 3?"}
                            answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat aliquam tempus. Phasellus auctor erat turpis, quis laoreet orci luctus eget. Quisque congue ut orci sit amet aliquam."}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs
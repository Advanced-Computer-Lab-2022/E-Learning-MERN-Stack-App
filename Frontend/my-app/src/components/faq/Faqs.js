import React from 'react'
import Question from './Question'

const Faqs = ({ visible, faqs }) => {

    const questions = faqs.map((faq) => [
        <Question
            question={faq.question}
            answer={faq.answer}
        />
    ])

    if (visible)
        return (
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-blue-500 dark:text-white">Frequently Asked Questions</h2>
                    <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                        {
                            questions.map((question, index) => {
                                if (index % 2 === 0)
                                    return (
                                        <div>
                                            {question}
                                        </div>
                                    )
                                return ''
                            })
                        }
                        {
                            questions.map((question, index) => {
                                if (index % 2 === 1)
                                    return (
                                        <div>
                                            {question}
                                        </div>
                                    )
                                return ''
                            })
                        }

                    </div>
                </div>
            </section>
        )
}

export default Faqs
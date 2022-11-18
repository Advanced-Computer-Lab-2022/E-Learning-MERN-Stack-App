import React from 'react'
import NewsletterButton from './NewsletterButton'
import NewsletterInput from './NewsletterInput'

const FooterNewsletter = () => {
    return (
        <div>
            <form action="">
                <div class="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
                    <div class="md:ml-auto md:mb-6">
                        <p>
                            <strong>Sign up for our newsletter</strong>
                        </p>
                    </div>
                    <NewsletterInput />
                    <NewsletterButton />
                </div>
            </form>
        </div>
    )
}

export default FooterNewsletter
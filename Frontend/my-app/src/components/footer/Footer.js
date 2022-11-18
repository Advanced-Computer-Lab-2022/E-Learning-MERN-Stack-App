import React from 'react'
import FooterAllLinks from './FooterAllLinks'
import FooterDescription from './FooterDescription'
import FooterLogos from './FooterLogos'
import FooterNewsletter from './FooterNewsletter'

const Footer = () => {
    return (
        <footer class="text-center bg-gray-900 text-white">
            <div class="container px-6 pt-6">
                <FooterLogos />
                <FooterNewsletter />
                <FooterDescription />
                <FooterAllLinks />
            </div>
        </footer>
    )
}

export default Footer
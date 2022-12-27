import React from 'react'
import UserInfoContext from '../../context/UserInfoContext'
import { useContext } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer';
import CertificatePDF from './CertificatePDF';


const RecieveCertificate = ({ visible, courseObj }) => {
    const { user, setUser } = useContext(UserInfoContext)

    if (visible)
        return (
            <section className="mb-10 text-gray-700 px-4">
                <h2 className=" mx-32 mb-8 text-4xl tracking-tight font-extrabold text-blue-500">Recieve Your Certificate</h2>
                <div className='mx-32 border-b-gray-200 border-b mb-10' />
                <div className='mx-48'>
                    <p className='font-semibold uppercase text-lg text-black'>
                        <span className='font-extrabold text-xl'>Congratulations
                            <span className='text-blue-500'> {user.firstName} </span>
                            !</span><br></br>
                        This amazing accomplishment is just one step on your journey.
                        Your ability to relentlessly search for solutions to problems and find innovative ways to improve the world is the key to this success and many to come.
                    </p>
                    <PDFDownloadLink document={<CertificatePDF user={user} courseObj={courseObj} />} fileName="Certificate.pdf">
                        <div
                            className='self-center rounded-lg bg-blue-500 text-center mt-10 mx-72 py-5 text-white text-4xl font-extrabold cursor-pointer flex felx-row hover:bg-blue-700'
                        >
                            <svg class="h-12 w-12 mx-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            <span className='px-4'>Download Certificate</span>
                        </div>
                    </PDFDownloadLink>
                </div>
                <div className='mx-32 border-b-gray-200 border-b my-10' />
            </section>
        )
}

export default RecieveCertificate
import React from 'react'
import { useContext } from 'react'
import CheckoutProfile from '../components/checkout/CheckoutProfile'
import CurrentViewContext from '../context/CurrentViewContext'
import CheckOutCC from '../components/checkout/CheckOutCC'
import CardDetails from './../components/checkout/CardDetails'
const CheckoutPage = () => {
    const { view, setView } = useContext(CurrentViewContext)
    if (view === 'checkout')
        return (
            <section className="h-screen bg-gray-200 bg-opacity-50 py-20">
                <form className="container max-w-2xl mx-auto shadow-md md:w-3/4 ">
                    <CheckoutProfile
                        name={"First Name"}
                        profileImgSrc={"https://mdbootstrap.com/img/Photos/Avatars/img%20(21).jpg"}
                    />
                    <div className="space-y-6 bg-white">
                        <CheckOutCC />
                        <CardDetails />
                        <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                            <button type="submit" className="py-2 px-4 mb-5 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Pay
                            </button>
                            {/* To be changed to LoggedIn user later */}
                            <button onClick={() => setView('guest')} className="py-2 px-4  bg-gray-500 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Go Back
                            </button>
                        </div>
                    </div>
                </form>
            </section>

        )
}

export default CheckoutPage
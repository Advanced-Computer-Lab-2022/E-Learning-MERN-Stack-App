import React, { useState } from 'react'
import StripeBuyNowButton from '../stripeComponents/StripeBuyNowButton'
import Wallet from '../wallet/Wallet';
import UserInfoContext from '../../context/UserInfoContext';
import { useContext } from 'react';
import { useCookies } from 'react-cookie';

function walletPaymentClbk() {
    // @TODO :: handle payment using wallet balance
}
const CourseBuyButton = ({ price }) => {
    const { user } = useContext(UserInfoContext);
    const [showModal, setShowModal] = React.useState(false);
    const [cookies] = useCookies(['userCookie']);
    const [showMessage, setShowMessage] = useState(false);

    return (

        <div className="my-10 ">
            <button
                className="py-2 px-4  bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg cursor-pointer"
                type="button"
                onClick={() => {
                    setShowModal(cookies['userCookie'] !== undefined);
                    setShowMessage(cookies['userCookie'] === undefined);
                }}
            >
                Buy Now
            </button>
            {
                (showMessage)
                    ? <p className="mt-3 text-md text-center text-red-600">Please Sign in first</p>
                    : ''
            }
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
                                        Pay with
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
                                    {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        THESE TERMS INCLUDE AN ARBITRATION CLAUSE AND A WAIVER OF YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION OR REPRESENTATIVE LAWSUIT.

                                        We may modify these Terms for any reason-at any time-by posting a new version on Our Website; these changes do not affect rights and obligations that arose prior to such changes. Your continued use of Our Website following the posting of modified Terms will be subject to the Terms in effect at the time of your use. Please review these Terms periodically for changes. If you object to any provision of these Terms or any subsequent modifications to these Terms or become dissatisfied with Our Website in any way, your only recourse is to immediately terminate use of Our Website.
                                    </p> */}
                                    <Wallet walletBalance={user.walletBalance} />
                                    <div className="flex items-center justify-end pt-6 border-t border-solid border-slate-200 rounded-b">

                                        {
                                            price > user.walletBalance
                                                ?
                                                [
                                                    <button
                                                        className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-blue-700 hover:text-white rounded-lg disabled:blur-sm disabled:hover:bg-white disabled:hover:text-blue-500" disabled type="button"
                                                        onClick={() => {
                                                            setShowModal(false)
                                                            walletPaymentClbk()
                                                        }}
                                                    >
                                                        Buy from wallet
                                                    </button>
                                                ]
                                                :
                                                [
                                                    <button
                                                        className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-blue-700 hover:text-white rounded-lg disabled:blur-sm disabled:hover:bg-white disabled:hover:text-blue-500" type="button"
                                                        onClick={() => {
                                                            setShowModal(false)
                                                            walletPaymentClbk()
                                                        }}
                                                    >
                                                        Buy from wallet
                                                    </button>
                                                ]
                                        }
                                        <StripeBuyNowButton />
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-red-500 hover:text-white rounded-lg" type="button"
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
    )
}

export default CourseBuyButton
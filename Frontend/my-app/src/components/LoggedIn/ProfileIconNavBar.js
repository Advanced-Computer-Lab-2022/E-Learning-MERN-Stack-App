import React from 'react'
import { useContext } from 'react';
import NavStateContext from '../../context/NavStateContext';
import Wallet from '../wallet/Wallet';
import UserInfoContext from '../../context/UserInfoContext';
const ProfileIconNavBar = () => {
    const { setNavIdx } = useContext(NavStateContext);
    const { user } = useContext(UserInfoContext)
    const [showModal, setShowModal] = React.useState(false);
    return (

        <>

            <div className="relative  cursor-pointer flex flex-row" >
                <svg
                    fill="#000000"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="40px"
                    height="40px"
                    viewBox="0 0 969.486 969.486"
                    xmlSpace="preserve"
                    stroke="#000000"
                    onClick={() => setShowModal(true)}
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <g>
                                <path d="M806.582,235.309L766.137,87.125l-137.434,37.51L571.451,9.072L114.798,235.309H0v725.105h907.137V764.973h62.35v-337.53 h-62.352V235.309H806.582z M718.441,170.63l17.654,64.68h-52.561h-75.887h-126.19l111.159-30.339l66.848-18.245L718.441,170.63z M839.135,892.414H68V522.062v-129.13v-10.233v-69.787v-9.602h35.181h27.538h101.592h409.025h75.889h37.43h35.242h35.244h13.994 v51.272v72.86h-15.357h-35.244h-87.85H547.508h-55.217v27.356v75.888v8.758v35.244v35.244v155.039h346.846v127.441H839.135z M901.486,696.973h-28.352h-34H560.291V591.375v-35.244v-35.244v-23.889v-1.555h3.139h90.086h129.129h56.492h34h4.445h23.904 V696.973z M540.707,100.191l21.15,42.688l-238.955,65.218L540.707,100.191z" />
                                <polygon points="614.146,564.57 614.146,576.676 614.146,631.152 680.73,631.152 680.73,564.57 658.498,564.57 " />
                            </g>
                        </g>
                    </g>
                </svg>
                <div class="flex relative w-12 h-12 bg-blue-500 justify-center items-center my-1 mx-10 text-xl rounded-full text-white"
                    onClick={
                        () => {
                            setNavIdx(8);
                        }
                    }>{user.firstName[0]}{user.lastName[0]}</div>
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
                                            Wallet
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
                                        <Wallet walletBalance={user.wallet} />
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
        </>
    )
}

export default ProfileIconNavBar
import React from 'react'
import PricingHeader from './PricingHeader'
import PricingItem from './PricingItem'
import { useState } from 'react'

const Pricing = ({ visible }) => {
    const [selectedPricing, setSelectedPricing] = useState(1);
    if (visible)
        return (
            <>
                <div className="lg:flex items-center justify-between mx-20 mb-14 mt-20">
                    <PricingHeader />
                    <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                        <img src="https://i.ibb.co/0n6DSS3/bgimg.png" className="absolute w-full -ml-12 mt-24" alt="background circle images" />
                        <PricingItem
                            text={"Starter"}
                            price={"FREE"}
                            selected={selectedPricing === 0}
                            description={"Full access to all features and no credit card required"}
                            myIdx={0}
                            setSelectedPricing={setSelectedPricing}
                        />
                        <PricingItem
                            text={"Personal"}
                            price={"$18"}
                            selected={selectedPricing === 1}
                            description={"Unlimited products features and dedicated support channels"}
                            myIdx={1}
                            setSelectedPricing={setSelectedPricing}
                        />
                        <PricingItem
                            text={"Team"}
                            price={"$18"}
                            selected={selectedPricing === 2}
                            description={"Unlimited products features and dedicated support channels"}
                            myIdx={2}
                            setSelectedPricing={setSelectedPricing}
                        />
                    </div>
                </div>
                {/* <div className='flex'>
                    <div className='w-1/2' />
                    <div className='w-1/3 mb-10 '>
                        <button type="button" className="py-5 bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg w-1/2 ">
                            Subscribe
                        </button>
                    </div>
                </div> */}
            </>

        )
}

export default Pricing
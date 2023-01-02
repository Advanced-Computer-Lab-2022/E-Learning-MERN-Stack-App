import React from 'react'
import { useContext } from 'react';
import NavStateContext from '../../context/NavStateContext';
const SigningUpRedirection = () => {
    const { navIdx, setNavIdx } = useContext(NavStateContext);
    return (
        <>
            <div className="pt-10 pb-4 text-center" onClick={() => setNavIdx(7)}>
                <p>
                    <a href="#" className="font-semibold">
                        <span className='text-blue-500 underline'>Forgot Password?</span>
                    </a>
                </p>
            </div>
        </>
    )
}

export default SigningUpRedirection
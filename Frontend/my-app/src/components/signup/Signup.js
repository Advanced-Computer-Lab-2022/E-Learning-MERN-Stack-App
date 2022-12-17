import React from 'react'
import SignupForm from './SignupForm'
import SignupImg from './SignupImg'
const Signup = ({ visible }) => {
    if (visible)
        return (

            <div class="flex flex-wrap w-full my-10">
                <div class="flex flex-col w-full md:w-1/2">
                    <div class="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                        <p class="text-3xl text-center font-bold text-blue-500">
                            Sign Up
                        </p>
                        <SignupForm />
                    </div>
                </div>
                <SignupImg />
            </div>

        )
}

export default Signup
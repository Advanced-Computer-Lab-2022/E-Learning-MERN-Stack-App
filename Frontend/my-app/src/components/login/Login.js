import React from 'react'
import LoginForm from './LoginForm'
import LoginImage from './LoginImage'
import SigningUpRedirection from './SigningUpRedirection'

const Login = ({ visible }) => {
    if (visible)
        return (
            <div class="flex flex-wrap w-full  my-10">
                <div class="flex flex-col w-full md:w-1/2">
                    <div class="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                        <p class="text-3xl text-blue-500 font-bold text-center">
                            Welcome
                        </p>
                        <LoginForm />
                        <SigningUpRedirection />
                    </div>
                </div>
                <LoginImage />
            </div>

        )
}

export default Login
import React from 'react'
import LoginImage from '../login/LoginImage'
import InstructorAddSectionForm from './InstructorAddSectionForm'

const InstructorAddSection = ({ visible, reviews }) => {

    if (visible)
        return (
            <div className="flex flex-wrap w-full  my-10">
                <div className="flex flex-col w-full md:w-1/2">
                    <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                        <p className="text-3xl text-blue-500 font-bold text-center">
                            Add Section
                        </p>
                        <InstructorAddSectionForm />
                    </div>
                </div>
                <LoginImage />
            </div>
        )
}


export default InstructorAddSection